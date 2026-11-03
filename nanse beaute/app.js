const products=[
{id:'cacao',name:'Cacao Lip Gloss',price:285000,img:'chocolate lipstick.jpeg',desc:'8 ml · high shine · cocoa brown',shades:['Cacao — chocolate brown','Truffle — deep neutral','Mocha — warm brown']},
{id:'chocolate',name:'Chocolate Gloss',price:245000,img:'brownie.jpeg',desc:'4 ml · Candilicious gloss · rich brown',shades:['Brownie — deep cocoa','Toffee — warm caramel','Espresso — rich dark brown']},
{id:'peche',name:'Pêche Lip Gloss',price:265000,img:'nude lipstick .jpeg',desc:'8 ml · peach gloss · softly luminous',shades:['Pêche — soft peach','Rosewater — pink nude','Nude — warm beige']},
{id:'lipgloss',name:'Signature Lip Gloss',price:225000,img:'WhatsApp Image 2026-11-03 at 22.16.10.jpeg',desc:'8 ml · hydrating · glossy · long lasting',shades:['Rose — vivid rose','Petal — soft pink','Berry — deep red']},
{id:'radiant',name:'Radiant Skin Cream',price:385000,img:'WhatsApp Image 2026-11-03 at 22.16.11.jpeg',desc:'50 g · brightens · hydrates · rejuvenates',shades:[]},
{id:'blush',name:'Pêche Soft Blush',price:310000,img:'palatte.jpeg',desc:'Flower-embossed pressed blush · satin finish',shades:['Pêche — soft peach','Petal — cool pink','Coral — warm rose']},
{id:'pinkies',name:'Pinkies Blush Trio',price:425000,img:'pinkies.jpeg',desc:'Three pink pressed blush compacts',shades:['Petal — light pink','Rose — classic pink','Coral — peach pink']},
{id:'complexion',name:'Plush Complexion Duo',price:590000,img:'plushie.jpeg',desc:'Cushion complexion compact with finishing powder',shades:['Fair — neutral','Medium — warm','Deep — golden']},
{id:'mascara',name:'Volume & Length Mascara',price:195000,img:'WhatsApp Image 2026-11-03 at 22.26.03 (1).jpeg',desc:'Black mascara · defining brush',shades:['Black — jet black']},
{id:'brow',name:'Brow Designer Pencil',price:95000,img:'WhatsApp Image 2026-11-03 at 22.26.03 (2).jpeg',desc:'Pencil with spoolie · precise brow definition',shades:['02 Brown — soft brown','01 Black — deep black','03 Taupe — cool taupe']},
{id:'mirror',name:'Bow Compact Mirror',price:125000,img:'WhatsApp Image 2026-11-03 at 22.26.03 (3).jpeg',desc:'Bow print folding mirror · silver finish',shades:[]},
{id:'case',name:'Petite Vanity Case',price:285000,img:'WhatsApp Image 2026-11-03 at 22.26.03.jpeg',desc:'Blush pink travel jewellery and beauty case',shades:[]},
{id:'scalp',name:'Scalp Massage Brush',price:85000,img:'WhatsApp Image 2026-11-03 at 22.26.04 (1).jpeg',desc:'Soft silicone scalp and shampoo brush',shades:['Blush — pink','Sage — green','Sky — blue']},
{id:'headband',name:'Cloud Spa Set',price:145000,img:'WhatsApp Image 2026-11-03 at 22.26.04 (2).jpeg',desc:'Plush spa headband and wrist wash bands',shades:['Blush — pink']}
];
const fmt=n=>'₦'+n.toLocaleString('en-NG');const grid=document.querySelector('#products');const cart={};
function renderProducts(){grid.innerHTML=products.map(p=>`<article class="product"><div class="product-image"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="product-meta"><h3>${p.name}</h3><span class="price">${fmt(p.price)}</span></div><p>${p.desc}</p>${p.shades.length?`<label>Choose shade<select id="shade-${p.id}">${p.shades.map(s=>`<option>${s}</option>`).join('')}</select></label>`:''}<button class="add" data-add="${p.id}"><span>ADD TO BAG</span><span>+</span></button></article>`).join('');}
function attachAdd(){grid.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;const p=products.find(x=>x.id===b.dataset.add);const shade=document.querySelector('#shade-'+p.id)?.value||'';const key=p.id+'|'+shade;cart[key]??={...p,shade,qty:0};cart[key].qty++;renderCart();document.querySelector('#cart').classList.add('open');document.querySelector('#shade').classList.add('show')})}
function renderCart(){const entries=Object.entries(cart).filter(([,v])=>v.qty);document.querySelector('#bagCount').textContent=entries.reduce((n,[,v])=>n+v.qty,0);document.querySelector('#itemCount').textContent=`(${entries.reduce((n,[,v])=>n+v.qty,0)})`;document.querySelector('#cartItems').innerHTML=entries.length?entries.map(([k,v])=>`<div class="cart-row"><span>${v.name} × ${v.qty}</span><b>${fmt(v.price*v.qty)}</b><small>${v.shade}</small><button data-remove="${k}">REMOVE</button></div>`).join(''):'<p style="font-size:12px;color:#927f6e">Your bag is waiting for its first piece.</p>';document.querySelector('#total').textContent=fmt(entries.reduce((n,[,v])=>n+v.price*v.qty,0))}
function closeCart(){document.querySelector('#cart').classList.remove('open');document.querySelector('#shade').classList.remove('show')}
renderProducts();attachAdd();renderCart();document.querySelector('.cart-open').onclick=()=>{document.querySelector('#cart').classList.add('open');document.querySelector('#shade').classList.add('show')};document.querySelector('.close').onclick=closeCart;document.querySelector('#shade').onclick=closeCart;document.querySelector('#cartItems').onclick=e=>{const b=e.target.closest('[data-remove]');if(b){delete cart[b.dataset.remove];renderCart()}};document.querySelector('#checkout').onclick=()=>{const entries=Object.values(cart).filter(x=>x.qty);if(!entries.length){alert('Add a piece to your bag first.');return}const lines=entries.map(x=>`• ${x.name}${x.shade?' / '+x.shade:''} × ${x.qty} — ${fmt(x.price*x.qty)}`).join('\n');const text=`Hello Nansé Beauté, I would like to request this order:\n${lines}\nSubtotal: ${document.querySelector('#total').textContent}\nDelivery: ${document.querySelector('#deliveryNote').value||'Please confirm delivery to my area in Yola.'}`;window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank','noopener')};
const hero=document.querySelector('.hero-object');const slats=document.querySelector('.room-slats');window.addEventListener('scroll',()=>{const y=window.scrollY;hero.style.translate='0 '+(y*.11)+'px';slats.style.translate=(-y*.055)+'px 0'},{passive:true});

const sceneCanvas=document.querySelector('#scene');
if(sceneCanvas&&window.THREE){
	const renderer=new THREE.WebGLRenderer({canvas:sceneCanvas,alpha:true,antialias:true});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMap.enabled=true;
	const scene=new THREE.Scene();
	const camera=new THREE.PerspectiveCamera(34,window.innerWidth/window.innerHeight,.1,100);
	camera.position.set(0,1.8,7.8);
	const display=new THREE.Group();
	const gold=new THREE.MeshStandardMaterial({color:0xc99763,metalness:.78,roughness:.2});
	const glass=new THREE.MeshPhysicalMaterial({color:0x9b6552,metalness:.05,roughness:.12,transparent:true,opacity:.66});
	const rose=new THREE.MeshStandardMaterial({color:0xb87870,roughness:.32});
	const ivory=new THREE.MeshStandardMaterial({color:0xe9d2bd,roughness:.55});
	const base=new THREE.Mesh(new THREE.CylinderGeometry(2.55,2.85,.3,64),new THREE.MeshStandardMaterial({color:0x291b15,roughness:.5}));
	base.position.y=-1.38;base.receiveShadow=true;display.add(base);
	function bottle(x,z,scale,material){const group=new THREE.Group();const body=new THREE.Mesh(new THREE.CylinderGeometry(.42,.48,1.65,32),material);const cap=new THREE.Mesh(new THREE.CylinderGeometry(.26,.26,.4,32),gold);cap.position.y=1.02;group.add(body,cap);group.position.set(x,-.35,z);group.scale.setScalar(scale);group.castShadow=true;display.add(group);return group}
	const heroBottle=bottle(-.82,.05,1.15,glass);bottle(.8,.15,.9,rose);bottle(.05,-.42,.72,ivory);
	const lid=new THREE.Mesh(new THREE.CylinderGeometry(.77,.77,.13,48),gold);lid.position.set(-.05,-1.03,-.2);lid.rotation.x=.18;lid.castShadow=true;display.add(lid);
	const light=new THREE.HemisphereLight(0xffead5,0x140b08,1.4);scene.add(light);
	const key=new THREE.SpotLight(0xffc48d,5,16,.55,.8);key.position.set(-3,6,4);key.castShadow=true;scene.add(key);
	const rim=new THREE.PointLight(0xd57d67,1.8,8);rim.position.set(3,1,2);scene.add(rim);
	scene.add(display);
	let pointerX=0,pointerY=0,scrollTurn=0;
	window.addEventListener('pointermove',event=>{pointerX=(event.clientX/window.innerWidth-.5)*.8;pointerY=(event.clientY/window.innerHeight-.5)*.35},{passive:true});
	window.addEventListener('scroll',()=>{scrollTurn=window.scrollY*.0007},{passive:true});
	window.addEventListener('resize',()=>{renderer.setSize(window.innerWidth,window.innerHeight);camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix()});
	function animate(time){const seconds=time*.001;display.rotation.y+=(pointerX+scrollTurn-display.rotation.y)*.035;display.rotation.x+=(pointerY-display.rotation.x)*.035;heroBottle.position.y=-.35+Math.sin(seconds*1.4)*.08;renderer.render(scene,camera);requestAnimationFrame(animate)}
	requestAnimationFrame(animate);
}
