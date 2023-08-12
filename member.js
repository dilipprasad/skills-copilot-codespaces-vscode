function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");

  if (skills.checked == true) {
    memberSkills.style.display = "block";
    member.style.display = "none";
  } else {
    memberSkills.style.display = "none";
    member.style.display = "block";
  }
}