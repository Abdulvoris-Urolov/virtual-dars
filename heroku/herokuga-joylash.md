**1. Projectni Deploy qilishga tayyorlaymiz**

**1.1**. Biz projectimiz havfsiz va samarali ishlashi uchun projectga **helmet** va **compression** pacetlarini o`rnatib olamiz.

**1.2**. Production muhitda ishlovchi barcha middleware functionlar ishlatish uchun alohida fayl ochamiz va unga helmet va compression paketlarini yuklab olamiz

```js 
const helmet = require('helmet');
const compression = require('compression');
```
va  ishlashi uchun alohida funksiya yozamiz
```js
module.exports = function(app){
    app.use(helmet());
    app.use(compression());
}
```
Shundan so'ng index faylimizga uni yuklab qo'yamiz 
```js
require('./startup/prod')(app);
```

**1.3**. Projectimizni HEROKU ga deploy qilish uchun yana **Package.json** paketiga yana bizor o`zgartirish qilishimizga to'g'ri keladi.
Projectimiz heroku muhitida bo'lganida uni ishga tushirib yuborish uchun *npm start* buyrug'i ishlatiladi shuning uchun biz package.json paketing scripts bo'limiga
 ```js
"start": "node index.js"
```
qatorini qo'shib qo'yishimiz kerak, yana projectni ishlatish uchun **node** ni versiyasi ham kerak bo'ladi va uni package.json fayliga mana bunday joylab qo'yamiz
```js
  "engines":{
    "node": "14.16.1"
  }
  ```
 **14.16.1** raqamlariga etiborliroq bo'lasizlar bunda node ni versiyasi yozilishi kerak. Node ni versiyasini bilish uchun tezminalga ***node -v*** ni yozasizlar va nihoyat projectimiz deploymentga tayyor. 

 **2. Projectni herokuga joylaymiz**

 **2.1** Birinchi o'rinda **heroku**dan ro'yxatda o'tib olamiz HEROKU.COM saytidan va kompyuterimizga **heroku cli** ni o'rnatib olamiz.

 Agar heroku cli ni o'rnatib bo'lgan bo'lsak unga kirib **login** qilib olamiz
ya'ni

**>heroku login**

kalit so'zlari yordamida va xohlagan tugmani bossak brauser ochiladi unda *login* tugmasini bosamiz keyin **cli** ga qaytamiz va login qilingan emailni korishingiz mumkin agar herokudan ro'xatdan to'g'ri o'tib kelgan bo'lsalaringiz.

**2.2** Endi projectimizni herokuga deploy qilishimiz uchun kodlarimizni birinchi bo'lib git repository ga joylab keyin uni herokuga push qilishimiz kerak

Yangi git repository ochish uchun
```js
git init
```
buyrug'ini terminaldan kiritamiz. 

Projectimizda **.gitinore** fayli borligiga e'tibor qilamiz .gitignore faylida repository ga qoshilmasligi kerak bo'lgan fayl nomlari bo'lishi kerak.

Shundan so'ng projectni repositoryga 
```js
git add .
```
buyrug'i orqali qo'shamiz va repository ga commit qilishimiz kerak buning uchun
```js
git commit -m "commit message"
```
va bu project ni push qilishdan oldin heroku dan alohida joy ochib olamiz ya'ni repository buning uchun
```js
heroku create
```
buyrug'ini terminaldan kiritamiz bu bilan biz local git repositorydan heroku repositoryga push qilishimiz kerak bo'ladi
```js
git push heroku master
```
buyrug'ini kiritib biz herokuni master branchiga kodlarimizni push qilamiz 

Shundan so'ng deploy qilingan hisoblanadi ammo biroz shoshilmasligimiz kerak, Projectimiz ishlaytganini tekshirib ko'rishimiz kerak. Deploy qilingan url ni topib terminalda masalan https://projectname.herokuapp.com kabi url ni olib postmanga o'tib uni sinab ko'ramiz.


**3. Tekshirish bo'limi**

Agar projectingiz ishlagan bo'lsa bu bo'limni o'qishinga shart emas.

**3.1** Agar bu bo'limni o'qishga hojat qolmagan bo'lsa juda hursand o'qiyabsizmi demak sizda nimadir ishlamayabda nima ishlamayotganini ho'rish uchun loyihadagi terminalni ochb unga 
```js
heroku logs 
```
buyrug'ini berib ko'rishingiz mumkin. 

Va yana bir nimaga ahamiyatliroq bo'ling projectingizni **mongodb** clusterga joylaganmidingiz agar joylamagan bo'lsangzi uni joylab ishlatib ko'ring.