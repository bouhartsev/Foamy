# Foamy
> FOR YOU

<br/>

![status: development](https://img.shields.io/badge/status-development-red)![version: alpha](https://img.shields.io/badge/version-alpha-brightgreen)![language count](https://img.shields.io/github/languages/count/bouhartsev/Foamy)

**['Foamy']()** is the сatalog of musical compositions.  
Author: [Matvey Bouhartsev](bouhartsev.top)  
Made by order of the [Moscow Polytechnic University](mospolytech.ru).

**[example.com]()**

<br/>

____

<br/>

## Installation

Clone the repo
```bash
git clone https://github.com/bouhartsev/Foamy.git
```

Install and activate virtual environment
```bash
python -m venv venv
.\venv\Scripts\activate #for Windows
source ./venv/bin/activate #for Linux
```

Install all requirements
```bash
pip install -r requirements.txt
```

Copy `.env.example` to `.env` in the `backend/core` directory.
```bash
cp .\backend\core\.env.example .\backend\core\.env
```



____

### Working with the backend

To create new superuser for working with Django Admin
```bash
py manage.py createsuperuser
```

If you change `models.py`
```bash
python manage.py makemigrations
python manage.py migrate
```

To launch the Django
```bash
py .\backend\manage.py runserver
```


```bash

```

## Technologies used

