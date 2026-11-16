# Patel Mohammadsaad — Portfolio Website (Simple Version)

Django + Python + HTML + CSS + JS. Ek hi page hai:
About, Skills, Projects, Experience, Education, Contact form.
Contact form ke messages database me save hote hain (Django admin me dikhte hain).

Code simple rakha hai taaki aage khud update kar sako.

## Files ka matlab (bas itna samjho)

```
portfolio-simple/
├── main/views.py              # Python — sirf 1 function, page dikhata + form save karta hai
├── main/models.py             # Python — contact message ka 4-field wala box
├── templates/main/index.html  # HTML — POORA portfolio text yahin hai (yahi badlo)
├── static/css/style.css       # CSS — rang aur design
├── static/js/main.js          # JS — sirf 2 kaam: footer year + mobile menu
├── static/files/              # Resume PDF (yahan nayi PDF daal kar naam same rakhna)
├── Dockerfile                 # Live server ke liye (chhedna mat)
└── docker-compose.yml         # Laptop par Docker se chalane ke liye
```

## 1. Laptop par chalao (BINA Docker — sabse simple)

```bash
cd portfolio-simple
python -m venv .venv
# Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
# Browser: http://127.0.0.1:8000
```

Docker se chalana ho (optional):

```bash
docker compose up --build
# Browser: http://localhost:8000
```

## 2. Update kaise karna hai (aage se khud)

**Text badlna ho** (naam, skill, project, job, email):
sirf `templates/main/index.html` kholo, wahi line badlo, save karo.
File me `👇` wale comments batate hain kya kahan badalna hai.
Naya project/job/skill: uska poora block copy karke paste kar do, phir text badlo.

**Rang badlna ho:** `static/css/style.css` me sabse upar `:root` wale rang badlo.

**Resume badlna ho:** nayi PDF ko `static/files/` me daalo aur naam
`Patel_Mohammadsaad_Resume.pdf` rakho (purani wali hata kar).

**Python files** (`views.py`, `models.py`) ko aam taur par chhedne ki
zaroorat nahi — wo bas page dikhate aur form save karte hain.

## 3. Contact form ke messages kahan dikhenge?

Django admin me: `http://127.0.0.1:8000/admin/`
Pehle admin user banao: `python manage.py createsuperuser`

## 4. FREE me live karna (Render) — laptop par Docker ki zaroorat NAHI

Live karne ke liye Docker Desktop install karne ki zaroorat nahi hai.
Render apne server par khud Docker se chala lega.

1. Code GitHub par push karo (repo public rakhna).
2. render.com par free account banao → New → Web Service → GitHub repo chuno.
3. Runtime: **Docker** chuno (Dockerfile pehle se hai).
4. Environment variables add karo:
   - `DJANGO_DEBUG` = `False`
   - `DJANGO_ALLOWED_HOSTS` = `tumhara-app-naam.onrender.com`
   - `DJANGO_SECRET_KEY` = koi lamba random string
   - `DJANGO_CSRF_TRUSTED_ORIGINS` = `https://tumhara-app-naam.onrender.com`
5. Deploy karo. Link milega (jaise `https://saad-portfolio.onrender.com`)
   — use resume aur LinkedIn me daal do.

**Baad me update live karna ho:** GitHub par code update karo (push),
Render apne aap naya version live kar dega.
