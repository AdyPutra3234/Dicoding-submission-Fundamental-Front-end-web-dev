class DataGlobal extends HTMLElement {
    
    set Data (data) {
        this.Gcf = data.confirmed.value;
        this.Grcv = data.recovered.value;
        this.Gdth = data.deaths.value;
        this.render();
    }

    render() {
        this.innerHTML = `

                <style>
                    table {
                        width: 100%;
                        text-align: center;
                        margin: 5px;
                    }
                    
                    .dataG table td {
                        margin: 3px;
                    }
                </style>

                <div class="row justify-content-center">
                    <div class="col-md-6 card bg-light">
                        <table>
                            <tr>
                                <th rowspan="4"><h3>Global</h3></th>
                            </tr>
                            <tr>
                                <th>Confirmed</th>
                                <td class="bg-cnf card">${this.Gcf}</td>
                            </tr>
                            <tr>
                                <th>Recovered</th>
                                <td class="bg-rvr card">${this.Grcv}</td>
                            </tr>
                            <tr>
                                <th>Deaths</th>
                                <td class="bg-dth card">${this.Gdth}</td>
                            </tr>
                        </table>
                    </div>
                </div>`;
    }
}

customElements.define("data-global", DataGlobal);