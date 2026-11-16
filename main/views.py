# Simple views.py — sirf ek page hai, isliye sirf ek function hai.
from django.contrib import messages
from django.shortcuts import redirect, render

from .models import ContactMessage


def home(request):
    # Agar contact form submit hua ho, to message database me save karo
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        message = request.POST.get("message", "").strip()
        if name and email and message:
            ContactMessage.objects.create(name=name, email=email, message=message)
            messages.success(request, "Thanks for your message! I will get back to you soon.")
            return redirect("home")

    # Page dikhao — saara text index.html me likha hai, yahan kuch nahi
    return render(request, "main/index.html")
