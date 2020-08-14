class listItem extends HTMLElement {

    set Data (data) {
        this._data = data;
        this.render();
    }

    render() {

        if (this._data.Provinsi) {
            this.innerHTML = `
                    <div class="row bg-light list_item">
                        <div class="col-md-5">
                            <h4>${this._data.Provinsi}</h4>
                        </div>
                        <div class="col bg-cnf">
                            <h4>${this._data.Kasus_Posi}</h4>
                        </div>
                        <div class="col bg-rvr">
                            <h4>${this._data.Kasus_Semb}</h4>
                        </div>
                        <div class="col bg-dth">
                            <h4>${this._data.Kasus_Meni}</h4>
                        </div>
                    </div>`;
        } else {
            this.innerHTML = `
                        <div class="row bg-light list_item">
                            <div class="col-md-5">
                                <h4>${this._data.Country_Region}</h4>
                            </div>
                            <div class="col bg-cnf">
                                <h4>${this._data.Confirmed}</h4>
                            </div>
                            <div class="col bg-rvr">
                                <h4>${this._data.Recovered}</h4>
                            </div>
                            <div class="col bg-dth">
                                <h4>${this._data.Deaths}</h4>
                            </div>
                        </div>`;
        }
    }
}

customElements.define("list-item", listItem);