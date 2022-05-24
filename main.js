
let csvContent;
const csv = "./senators_ordered.csv";

const handleCSV = async (url) => {
    const response = await fetch(url);
    return await response.text();
};

handleCSV(csv)
    .then((text) => {
        csvContent = d3.csvParse(text);
        return csvContent;
    })
    .then((csvContent) => {
        console.log(csvContent)
        let senatorPhoto = d3.select("#senator-photo");
        let senatorName = d3.select("#senator-name");
        let politicalPartyName = d3.select("#political-party-name");
        const circles = d3.select("svg").select("g").selectAll("circle");
        console.log(circles)
        circles
            .data(csvContent)
            .on("click", (e, item) => {
                senatorPhoto.attr("src", () => {
                    return item.urlFoto;
                })
                senatorName.text(item.nomeSenador);
                politicalPartyName.text(item.siglaPart);
            })

            .on('mouseover', function (item, e) {
                d3.select(this).transition()
                    .duration('50')
                    .style('stroke', 'black')
                    .style('stroke-width', '2px');
            })
            .on('mouseout', function (item, e) {
                d3.select(this).transition()
                    .duration('50')
                    .style('stroke-width', '0px');
            })
    }
    )

