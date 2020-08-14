import '../component/data-global.js';
import '../component/data-list.js';
import '../component/search-input.js';
import '../component/seach-result.js';
import DataSource from '../data/data-source.js';

const main = () => {

    const nav = document.querySelector("nav");
    const data_global = document.querySelector("data-global");
    const search_input = document.querySelector("search-input");
    const search_result = document.querySelector("search-result");
    const data_list = document.querySelector("data-list");
    
    // Responsive Layout
    const mq = "(min-width: 576px)";
    if (window.matchMedia(mq).matches) {
        nav.setAttribute("class" , "navbar navbar-expand-sm navbar-dark");
    } else {
        nav.setAttribute("class" , "navbar navbar-expand-sm navbar-light");
    }

    window.matchMedia(mq).addEventListener("change" , function () {

        let matched = this.matches;

        if (matched) {
            nav.setAttribute("class" , "navbar navbar-expand-sm navbar-dark");
        } 
        else {
            nav.setAttribute("class" , "navbar navbar-expand-sm navbar-light");
        }
    });

    // Get data (default view) 
    (async () => {
        try {
            const resultG = await DataSource.getDataGlobal();
            data_global.Data = resultG;
            data_list.Check = true;
            const dataList = await DataSource.listDataRegion();
            data_list.dataList = dataList;
        }catch (message) {
            alert(message);
        }

    })();
    
    // Search Data Country
    const SearchData = async () => {
        try {
            const dataResult = await DataSource.searchResult(search_input.value);
            search_result.Search = search_input.value;
    
            if (dataResult.error) {
                search_result.renderError(dataResult.error);
            } else {
                search_result.Data = dataResult;
            }
        }
        catch (message) {
            alert(message);
        }
    };
    
    // Set Table Data
    const dataG = document.querySelector("#global");
    const dataI = document.querySelector("#indonesia");

    dataG.addEventListener("click" , async () => {
        try {
            data_list.Check = true;
            const dataList = await DataSource.listDataRegion();
            data_list.dataList = dataList;
        }catch (message) {
            alert(message);
        }
    });

    dataI.addEventListener("click" , async () => {
        try {
            data_list.Check = false;
            const dataList = await DataSource.listDataIndonesia();
            data_list.dataList = dataList;
        }catch (message) {
            alert(message);
        }
    });

    // Search button event clicked
    const SearchButtonClicked = () => {
        SearchData();
    };

    // Enter Key event
    const EnterKeyPressed = (event) => {
        if(event.keyCode === 13) {
            SearchData();
        }
    };

    search_input.clickEvent = SearchButtonClicked;
    search_input.KeyPressed = EnterKeyPressed;
}

export default main;