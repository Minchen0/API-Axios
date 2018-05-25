<div class="collapse navbar-collapse" id="navbarCollapse">
<ul class="navbar-nav ml-auto">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      Discover
    </a>
    <div class="dropdown-menu">
      <a asp-area="" asp-controller="Discover" asp-action="Index" class="dropdown-item">Lessons</a>
      <a asp-area="" asp-controller="Instructors" asp-action="Index" class="dropdown-item">Instructors</a>
      <a asp-area="" asp-controller="Courses" asp-action="Index" class="dropdown-item">Courses</a>
      <div class="dropdown-divider"></div>
      <a asp-area="" asp-controller="SignUp" asp-action="Index" class="dropdown-item">Sign up today</a>
      <a asp-area="" asp-controller="SignUp" asp-action="Index" class="dropdown-item">Subscriptions</a>
      <div class="dropdown-divider"></div>
      <a asp-area="" asp-controller="Content" asp-action="Integrations" class="dropdown-item">Integrations</a>
      <a asp-area="" asp-controller="Content" asp-action="CustomContent" class="dropdown-item">Custom Content</a>
      <a asp-area="" asp-controller="Home" asp-action="Newsletter" class="dropdown-item">Newsletter</a>
      <div class="dropdown-divider"></div>
      <a asp-area="" asp-controller="Content" asp-action="HubSpot" class="dropdown-item">HubSpot Test</a>
    </div>
  </li>

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      Business
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Single Venue</a>
      <a class="dropdown-item" href="#">Multi Venue</a>
      <a class="dropdown-item" href="#">Corporate</a>
    </div>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#">Academic</a>
  </li>

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      About
    </a>
    <div class="dropdown-menu">
      <a asp-area="" asp-controller="Content" asp-action="Who" class="dropdown-item">Who we are</a>
      <a asp-area="" asp-controller="Content" asp-action="Where" class="dropdown-item">Where we are</a>
      <a asp-area="" asp-controller="Content" asp-action="Team" class="dropdown-item">Meet the Team</a>
      <a asp-area="" asp-controller="Home" asp-action="Contact" class="dropdown-item">Contact Us</a>
    </div>
  </li>
</ul>

<ul class="navbar-nav mr-2">
  <li class="nav-item dropdown">
    <a class="dropdown-toggle btn" href="#" id="navbardrop" data-toggle="dropdown">
      Login
    </a>
    <div class="dropdown-menu dropdown-menu-right">
      <a href="@Settings.TypsyIndividualWebSiteUrl" class="dropdown-item" target="_blank">Member</a>
      <a href="@Settings.TypsyManagerWebSiteUrl" class="dropdown-item" target="_blank">Manager</a>
      <div class="dropdown-divider"></div>
      <a asp-area="" asp-controller="SignUp" asp-action="Index" class="dropdown-item">Sign Up</a>
    </div>
  </li>
</ul>
</div>
