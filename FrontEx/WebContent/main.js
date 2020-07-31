'use strict';

/* navbar가 스크롤링에 의해서 내려가기 */

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
	/*console.log(window.scrollY);*/
	if(window.scrollY > navbarHeight){
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () =>{
	
	const target = event.target;
	const link = target.dataset.link;
	if(link == null){
		return;
	}
	
	scollIntoView(link);
	
});

// Handle click on "contact me" button on home
const homeMenu = document.querySelector('.home__contact');
homeMenu.addEventListener('click', () =>{
		
	scollIntoView('#contact');
		
});

function scollIntoView(selector){
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({behavior:"smooth"});
}

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('#HomeContainer');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
	const homeOpacity = 1 - window.scrollY / homeHeight;
	home.style.opacity = homeOpacity;
	
	const about = document.querySelector('#aboutContainer');
	const aboutHeight = about.getBoundingClientRect().height;
	const aboutOpacity = 1 - window.scrollY / aboutHeight+0.8;
	about.style.opacity = aboutOpacity;
	
});

const arrowUp = document.querySelector('.arrow-up');
// show 'arrow up' button when scrolling down
document.addEventListener('scroll', ()=>{
	
	if(window.scrollY > homeHeight / 2){
		arrowUp.classList.add('visible');
	} else {
		arrowUp.classList.remove('visible');
	}
		
});

const arrow = document.querySelector('.arrow-up');
arrow.addEventListener('click', () =>{
	scollIntoView('#Home');
});

// Project Hide and View

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
	// span을 눌렀을 때 부모 노드의 데이터를 출력할 수 있도록 || 설정
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if(filter == null){
		return;
	}
	projectContainer.classList.add('anim-out');
	
	setTimeout(()=> {
		projectContainer.classList.remove('anim-out');
		projects.forEach((project) =>{
			if(filter === '*' || filter === project.dataset.type){
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
	}, 300);
		
		
	
	
});



















