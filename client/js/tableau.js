
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/HowICodebyKylerLittle/LanguagevProjectDashboard?:embed=y&:display_count=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}