class SearchInput extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent (action) {
        this._clickEvent = action;
        this.render();
    }

    set KeyPressed (action) {
        this._KeyPressed = action;
        this.render();
    }

    get value () {
        return this.querySelector("#searchInput").value;
    }

    render() {
        this.innerHTML = `
            <style>
                .btn {
                    color: white;
                }
            </style>
                
            <div class="row justify-content-center">
                <div class="col-md-8 input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search Country" id="searchInput" >
                <div class="input-group-append">
                    <button class="btn bg-primary">Search</button>
                </div>
            </div>`;

            this.querySelector(".btn").addEventListener("click" , this._clickEvent);
            this.querySelector("#searchInput").addEventListener("keydown", this._KeyPressed);
    }
}

customElements.define("search-input", SearchInput );