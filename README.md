# Foamy
> FOR YOU

<br/>

![status: build](https://img.shields.io/badge/status-build-red)  ![version: beta](https://img.shields.io/badge/version-beta-brightgreen)  ![language count](https://img.shields.io/github/languages/count/bouhartsev/Foamy)

**['Foamy'](http://foamy.std-1374.ist.mospolytech.ru/)** is the сatalog of musical compositions.  
Author: [Matvey Bouhartsev](//bouhartsev.top)  
Made by order of the [Moscow Polytechnic University](//mospolytech.ru).

![Foamy screenshot](_docs/Screenshot.png)

**[http://foamy.std-1374.ist.mospolytech.ru/](http://foamy.std-1374.ist.mospolytech.ru/)**

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

Install all required dependencies
```bash
pip install -r requirements.txt
```

Copy `.env.example` to `.env` in the `backend/core` directory.
```bash
cp .\backend\core\.env.example .\backend\core\.env
```

<br/>

**NOTE:** Launch Django and Vue servers in different terminals. 


### Working with the backend

To create new superuser for working with Django Admin
```bash
python .\backend\manage.py createsuperuser
```

If you change `models.py`
```bash
python .\backend\manage.py makemigrations
python .\backend\manage.py migrate
```

To launch the Django
```bash
python .\backend\manage.py runserver
```

If you made new dependencies 
```bash
pip freeze > requirements.txt
```


### Working with the frontend

Go to the frontend directory
```bash
cd frontend
```

Install node modules
```bash
yarn install
```

Serve development
```bash
yarn serve
```

**After all changes:**

Make a build
```bash
yarn build
```

Go to the root directory and collect static files for Django
```bash
cd ..
python .\backend\manage.py collectstatic
```

<br/>

____

<br/>

## Technologies used

- Django
    - Django Rest
    - Jazzmin
- SQLite
- Vue
    - VueX
    - Vue-Router
    - Vuetify
    - Vuetify-loader
- Axios
- MDI Icons
- FontAwesome
- Fonts
    - 'Please write me a sing' ByTheButterfly
    - 'Tchaikovsky' JoannaVu

## Docs

- [Report](_docs/Foamy_Report.docx)
- [Score sheet](_docs/Foamy_Score_sheet.docx)
- [Mockup (Axure)](_docs/Mockup_Foamy.rp)
- [Layout](https://www.figma.com/file/SYcSf7c7SKgGxkeLVKfdjf/Foamy)
- [ER diagram](_docs/ER-diagram.png)
