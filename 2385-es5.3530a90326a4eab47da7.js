!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[2385],{72385:function(o,t,i){"use strict";i.r(t),i.d(t,{ProfilePageModule:function(){return q}});var r=i(61116),l=i(75425),a=i(39238),s=i(64762),c=i(61071),u=i(54405),f=i(86799),p=i(33316),g=i(74249);function h(n,e){if(1&n&&(p.TgZ(0,"ion-title",9),p._uU(1),p.ALo(2,"async"),p.qZA()),2&n){var o=p.oxw();p.xp6(1),p.hij(" @",p.lcZ(2,1,o.user$).username," ")}}function d(n,e){1&n&&p._UZ(0,"ion-icon",16)}function Z(n,e){if(1&n&&(p.TgZ(0,"ion-item",10),p.TgZ(1,"ion-avatar",11),p._UZ(2,"img",12),p.qZA(),p.TgZ(3,"ion-label"),p.TgZ(4,"h1",13),p._uU(5),p.qZA(),p.TgZ(6,"h3"),p._uU(7),p.qZA(),p.TgZ(8,"p",14),p._uU(9),p.YNc(10,d,1,0,"ion-icon",15),p.qZA(),p.qZA(),p.qZA()),2&n){var o=e.ngIf;p.xp6(2),p.Q6J("src",o.avatar,p.LSH),p.xp6(3),p.AsE("",o.firstName," ",o.lastName,""),p.xp6(2),p.Oqu(o.status),p.xp6(2),p.hij(" ",o.isOnline?"online":"offline"," "),p.xp6(1),p.Q6J("ngIf",o.isMobileOnline)}}function m(n,e){if(1&n&&(p.TgZ(0,"ion-list",10),p.YNc(1,Z,11,6,"ion-item",8),p.ALo(2,"async"),p.qZA()),2&n){var o=p.oxw();p.xp6(1),p.Q6J("ngIf",p.lcZ(2,1,o.user$))}}var v,y,A=[{path:"",component:(v=function(){function o(e,t){n(this,o),this.store=e,this.menuController=t}var t,i,r;return t=o,(i=[{key:"doRefresh",value:function(n){setTimeout(function(){n.target.complete()},500)}},{key:"toggleMenu",value:function(){this.menuController.toggle("profile")}},{key:"ngOnInit",value:function(){this.store.dispatch(new u.d.FetchUser("1"))}},{key:"ionViewDidEnter",value:function(){this.menuController.enable(!0,"profile")}},{key:"ionViewDidLeave",value:function(){this.menuController.enable(!1,"profile")}}])&&e(t.prototype,i),r&&e(t,r),o}(),v.\u0275fac=function(n){return new(n||v)(p.Y36(c.yh),p.Y36(g._q))},v.\u0275cmp=p.Xpm({type:v,selectors:[["app-profile"]],decls:15,vars:6,consts:[[1,"ion-no-border"],["slot","start"],["slot","icon-only","name","qr-code-outline"],["class","ion-text-center",4,"ngIf"],["slot","end"],[3,"click"],["slot","icon-only","name","menu-outline"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","100",3,"ionRefresh"],["lines","none",4,"ngIf"],[1,"ion-text-center"],["lines","none"],["slot","start",2,"width","72px","height","72px"],[3,"src"],[2,"font-weight","bold"],[2,"vertical-align","middle","display","table-cell"],["name","phone-portrait-outline","size","small","color","primary","style","width: 14px; height: 14px; vertical-align: middle",4,"ngIf"],["name","phone-portrait-outline","size","small","color","primary",2,"width","14px","height","14px","vertical-align","middle"]],template:function(n,e){1&n&&(p.TgZ(0,"ion-header",0),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",1),p.TgZ(3,"ion-button"),p._UZ(4,"ion-icon",2),p.qZA(),p.qZA(),p.YNc(5,h,3,3,"ion-title",3),p.ALo(6,"async"),p.TgZ(7,"ion-buttons",4),p.TgZ(8,"ion-button",5),p.NdJ("click",function(){return e.toggleMenu()}),p._UZ(9,"ion-icon",6),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(10,"ion-content"),p.TgZ(11,"ion-refresher",7),p.NdJ("ionRefresh",function(n){return e.doRefresh(n)}),p._UZ(12,"ion-refresher-content"),p.qZA(),p.YNc(13,m,3,3,"ion-list",8),p.ALo(14,"async"),p.qZA()),2&n&&(p.xp6(5),p.Q6J("ngIf",!p.lcZ(6,2,e.userLoadingStates$).isLoading),p.xp6(8),p.Q6J("ngIf",!p.lcZ(14,4,e.userLoadingStates$).isLoading))},directives:[g.Gu,g.sr,g.Sm,g.YG,g.gu,r.O5,g.W2,g.nJ,g.Wo,g.wd,g.q_,g.Ie,g.BJ,g.Q$],pipes:[r.Ov],styles:[""]}),(0,s.gn)([(0,c.Ph)((0,f.d)())],v.prototype,"user$",void 0),(0,s.gn)([(0,c.Ph)((0,f.f)())],v.prototype,"userLoadingStates$",void 0),v)}],x=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),e}(),q=((y=function e(){n(this,e)}).\u0275fac=function(n){return new(n||y)},y.\u0275mod=p.oAB({type:y}),y.\u0275inj=p.cJS({imports:[[r.ez,x,l.m]]}),y)}}])}();