async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("hero", "homepage/hero.html");
loadComponent("description", "homepage/description.html");
loadComponent("buttons", "homepage/buttons.html");
loadComponent("offerings", "homepage/offerings.html");
loadComponent("events", "homepage/events.html");
loadComponent("testimonials", "homepage/testimonial.html");
loadComponent("footer", "homepage/footer.html");

loadComponent("mycstory", "aboutpage/mycstory.html");
loadComponent("team", "aboutpage/team.html");
loadComponent("members", "aboutpage/members.html");

loadComponent("herojoin", "joinpage/herojoin.html");
loadComponent("socials", "joinpage/socials.html");
loadComponent("forms", "joinpage/forms.html");
loadComponent("donate", "joinpage/donate.html");
loadComponent("collab", "joinpage/collab.html");

loadComponent("hero_programs", "programspage/hero_programs.html");
loadComponent("youthgroup", "programspage/youthgroup.html");
loadComponent("socialevents", "programspage/socialevents.html");
loadComponent("workshops", "programspage/workshops.html");
loadComponent("leadership", "programspage/leadership.html");

loadComponent("upcoming", "eventspage/upcoming.html");
loadComponent("details", "eventspage/details.html");

loadComponent("resmyc", "resourcespage/resmyc.html");
loadComponent("resislamic", "resourcespage/resislamic.html");
loadComponent("rescollege", "resourcespage/rescollege.html");