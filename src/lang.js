import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    cs: {
        issues: "Návrhy a chyby",
        teams: "Jednotlivé týmy",
        institutions: "Akademické instituce",
        total: "České akademické instituce přispěly celkem",
        points: "body",
        attribution: "Vytvořili studenti <a href='https://fit.cvut.cz'><b>FIT ČVUT</b></a>",
        start_folding: "Zapojte se s námi i Vy!<br> <a href='https://foldingathome.org/start-folding/' target='_blank'>Více info zde</a>",
        addition_request: "Pokud zde nevidíte váš tým/insitutici, a chtěli byste ho přidat do databáze, " +
            "vytvořte prosím issue na <a href='https://www.github.com/jirkavrba/folding-stats/issues/new'>githubu</a>",
        loading: "Načítání...",
        back: "Zpět na výpis",
        view_at_folding: "Zobrazit na folding@home",
        toggle_chart: "Přepnout graf (celkové skore / přírůstek za časový interval)",
        toggle_chart_increase: "Přepnout graf (denní přirůstek / 6h přírustek)"
    },
    en: {
        issues: "Bugs and suggestions",
        teams: "Individual teams",
        institutions: "Academic institutions",
        total: "Czech academic institutions have contributed a total of",
        points: "points",
        attribution: "Project created by students of the <a href='https://old.fit.cvut.cz/en'><b>FIT CTU</b></a>",
        start_folding: "Start folding with us today!<br> <a href='https://foldingathome.org/start-folding/' target='_blank'>More info</a>",
        addition_request: "If you would like to add your institution/team to the database, " +
            "please create an issue on <a href='https://www.github.com/jirkavrba/folding-stats/issues/new'>github</a>",
        loading: "Loading...",
        back: "Return ",
        view_at_folding: "view at folding@home",
        toggle_chart: "Toggle the chart type (total score / increase within time interval)",
        toggle_chart_increase: "Toggle the chart type (daily increase / 6h increase)"
    }
}

const userLang = localStorage.lang
    || (navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage));

const i18n = new VueI18n({
    locale: userLang?.substring(0, 2),
    fallbackLocale: "en",
    messages: messages
})

export default i18n;
