let arrays = [
    [5, 10, 18, 24, 44, 57, 60],
    [22, 30, 15, 50],
    [17, 25, 70, 33, 42, 51, 63, 48, 36]
  ];

  let arrData = arrays[0];

  let svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 300)

    d3.select("body")
        .append("button")
        .text("Button1")
        .on("click", render)
        .attr("data-subject", "0")

    d3.select("body")
        .append("button")
        .text("Button2")
        .on("click", render)
        .attr("data-subject", "1")

        d3.select("body")
        .append("button")
        .text("Button3")
        .on("click", render)
        .attr("data-subject", "2")

    function render(){
        let subject = this.getAttribute("data-subject");
        let arrData = arrays[subject];
        let update =  svg.selectAll("rect").data(arrData)

        let enter = update.enter()
                .append("rect")
                .attr('y', (d, i) => {
                    return (i * 25)
                  })
                .attr("width", 0) 
                .attr("height", "20")
                .attr("fill", "lightblue");               

            enter.merge(update)
                .transition()
                .duration(3000)
                .attr("width", (d) => {
                            return d * 5;
                    })
                
            update.exit().remove();

    }
