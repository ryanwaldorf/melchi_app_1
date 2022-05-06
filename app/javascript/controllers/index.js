// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

$("#melchi_learns").click(function() {
  $("#melchi_happy").addClass("d-none");
  $("#happy_melchi_text").addClass("d-none");
  $("#melchi_sad").removeClass("d-none");
  $("#angry_melchi_text").removeClass("d-none");
  $("#melchi_learns").addClass("d-none");
});
