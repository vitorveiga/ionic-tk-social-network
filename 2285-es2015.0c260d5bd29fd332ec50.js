(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[2285],{2285:function(n,o,i){"use strict";i.r(o),i.d(o,{LoginPageModule:function(){return f}});var t=i(61116),e=i(31041),r=i(74249),a=i(75425),l=i(39238),s=i(89363),u=i(33316),c=i(61071);const g=function(){return["/auth","forgot"]},p=function(){return["/auth","register"]},d=function(){return["/auth","pin"]},m=[{path:"",component:(()=>{class n{constructor(n,o,i){this.store=n,this.navController=o,this.platform=i}onLogin(){if(this.login.valid){const n=Math.floor(100*Math.random()).toString();this.store.dispatch(new s.g.Login(n))}}ngOnInit(){this.login=new e.cw({email:new e.NI("example@example.example",[e.kI.required,e.kI.email]),password:new e.NI("pwdpwd",[e.kI.required,e.kI.minLength(6),e.kI.maxLength(150)])})}}return n.\u0275fac=function(o){return new(o||n)(u.Y36(c.yh),u.Y36(r.SH),u.Y36(r.t4))},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-login"]],decls:28,vars:9,consts:[[1,"auth-page",3,"fullscreen"],["size-md","6","size-lg","5","size-xs","12",1,"ion-text-center"],[3,"formGroup","ngSubmit"],[1,"logo"],["src","./assets/logo/TK_DEFAULT_LOGO.png","width","96px"],["color","light",1,"auth-card","ion-margin"],["color","light"],["type","email","placeholder","Email","formControlName","email"],["color","light",1,"ion-no-inner-padding-end"],["type","password","placeholder","Password","formControlName","password"],["slot","end","fill","clear","routerDirection","forward",1,"ion-no-margin",3,"routerLink"],["slot","icon-only","color","medium","name","help-circle-outline"],["expand","block","type","submit",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled"],[1,"ion-margin"],["expand","block","routerDirection","forward",1,"ion-margin",3,"routerLink"]],template:function(n,o){1&n&&(u.TgZ(0,"ion-toolbar"),u.TgZ(1,"ion-title"),u._uU(2,"login"),u.qZA(),u.qZA(),u.TgZ(3,"ion-content",0),u.TgZ(4,"ion-grid"),u.TgZ(5,"ion-row"),u.TgZ(6,"ion-col",1),u.TgZ(7,"form",2),u.NdJ("ngSubmit",function(){return o.onLogin()}),u.TgZ(8,"div",3),u._UZ(9,"img",4),u.qZA(),u.TgZ(10,"ion-card",5),u.TgZ(11,"ion-item",6),u._UZ(12,"ion-input",7),u.qZA(),u.TgZ(13,"ion-item",8),u._UZ(14,"ion-input",9),u.TgZ(15,"ion-button",10),u._UZ(16,"ion-icon",11),u.qZA(),u.qZA(),u.qZA(),u.TgZ(17,"ion-button",12),u._uU(18," Log In "),u.qZA(),u._UZ(19,"span",13),u.TgZ(20,"ion-text"),u._uU(21,"or"),u.qZA(),u._UZ(22,"span",13),u.TgZ(23,"ion-button",14),u._uU(24," Sign Up "),u.qZA(),u._UZ(25,"span",13),u.TgZ(26,"ion-button",14),u._uU(27," Auth pin example "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n&&(u.xp6(3),u.Q6J("fullscreen",!0),u.xp6(4),u.Q6J("formGroup",o.login),u.xp6(8),u.Q6J("routerLink",u.DdM(6,g)),u.xp6(2),u.Q6J("disabled",!o.login.valid),u.xp6(6),u.Q6J("routerLink",u.DdM(7,p)),u.xp6(3),u.Q6J("routerLink",u.DdM(8,d)))},directives:[r.sr,r.wd,r.W2,r.jY,r.Nd,r.wI,e._Y,e.JL,e.sg,r.PM,r.Ie,r.pK,r.j9,e.JJ,e.u,r.YG,r.YI,l.rH,r.gu,r.yW],styles:[""]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[t.ez,e.u5,r.Pc,Z,a.m]]}),n})()}}]);