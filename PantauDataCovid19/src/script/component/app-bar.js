class AppBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(){

        this.innerHTML = `
                <style>
                    nav .dropdown-menu {
                        cursor: pointer;
                    }
                </style>    

                <nav>
                    <div class="container">
                        <a class="navbar-brand">Data Covid-19</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Table Data
                                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" id="global">Global</a>
                            <a class="dropdown-item" id="indonesia">Indonesia</a>
                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </nav>`;
    }
}

customElements.define("app-bar", AppBar);