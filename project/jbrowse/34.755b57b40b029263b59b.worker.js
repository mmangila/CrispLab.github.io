this.webpackChunk([34],{2057:function(e,t,a){"use strict";a.r(t);var n=a(20),o=a(9),i=a(0),l=a.n(i),c=a(16),r=a(358),m=a(944),s=a(945),d=a(205),u=a(946),y=a(99),p=a(910),f=a(174),h=a(72),g=a.n(h),E=Object(r.a)((function(e){return{root:{},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},table:{border:"1px solid #888",margin:e.spacing(4),"& td":{padding:e.spacing(1)}}}}));function b(e){var t=e.modifications,a=E();return l.a.createElement("table",{className:a.table},l.a.createElement("tbody",null,t.map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",{style:{width:"1em",background:n}}))}))))}t.default=Object(c.observer)((function(e){var t=E(),a=e.model,o=e.handleClose,i=a.colorBy,c=a.modificationTagMap,r=Object(n.a)(c.entries());return l.a.createElement(m.a,{open:!0,onClose:o},l.a.createElement(s.a,null,"Color by modifications",l.a.createElement(d.a,{"aria-label":"close",className:t.closeButton,onClick:o},l.a.createElement(g.a,null))),l.a.createElement(u.a,null,l.a.createElement("div",{className:t.root},l.a.createElement(y.a,null,"You can choose to color the modifications in the BAM/CRAM MM/ML specification using this dialog. Choosing modifications colors the modified positions and can color multiple modification types. Choosing the methylation setting colors methylated and unmethylated CpG."),l.a.createElement(y.a,null,"Note: you can revisit this dialog to see the current mapping of colors to modification type for the modification coloring mode"),l.a.createElement("div",{style:{margin:20}},"modifications"===(null===i||void 0===i?void 0:i.type)?l.a.createElement("div",null,r.length?l.a.createElement(l.a.Fragment,null,"Current modification-type-to-color mapping",l.a.createElement(b,{modifications:Object(n.a)(c.entries())})):l.a.createElement("div",null,l.a.createElement(y.a,null,"Note: color by modifications is already enabled. Loading current modifications..."),l.a.createElement(p.a,{size:15}))):null,"methylation"===(null===i||void 0===i?void 0:i.type)?l.a.createElement(b,{modifications:[["methylated","red"],["unmethylated","blue"]]}):null),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(f.a,{variant:"contained",color:"primary",style:{margin:5},onClick:function(){a.setColorScheme({type:"modifications"}),o()}},"Modifications"),l.a.createElement(f.a,{variant:"contained",color:"primary",style:{margin:5},onClick:function(){a.setColorScheme({type:"methylation"}),o()}},"Methylation"),l.a.createElement(f.a,{variant:"contained",color:"secondary",style:{margin:5},onClick:function(){return o()}},"Cancel")))))}))}});
//# sourceMappingURL=34.755b57b40b029263b59b.worker.js.map