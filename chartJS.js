//設定id 把第一行傳好應該就能跑
var id="UC5CwaMl1eIgY8h02uZw7u8A"
var url;
var headerName;
//本來0期生和Gamers不在我只好自己寫switch cases 後面懶ㄉ改 落落長
switch(id){
    case "UC5CwaMl1eIgY8h02uZw7u8A":
        url="HoshimachiSuisei.csv";
        headerName="Hoshimachi Suisei"
        break;
    case "UCDqI2jOz0weumE8s7paEk6g":
        url="RobocoSan.csv";
        headerName="Roboco-san"
        break;
    case "UC-hM6YJuNYVAmUWxeIr9FeA":
        url="SakuraMiko.csv";
        headerName="Sakura Miko";
        break;
    case "UCp6993wxpyDPHUpavwDFqgg":
        url="TokinoSora.csv";
        headerName="Tokino Sora";
        break;
    case "UChAnqc_AY5_I3Px5dig3X1Q":
        url="InugamiKorone.csv";
        headerName="Inugami Korone";
        break;
    case "UCp-5t9SrOQwXMU7iIjQfARg":
        url="OokamiMio.csv";
        headerName="Ookami Mio";
        break;
    case "UCvaTdHTWBGv3MKj3KVqJVCw":
        url="NekomataOkayu.csv";
        headerName="Nekomata Okayu";
        break;
    case "UCD8HOxPs4Xvsm8H0ZxXGiBw":
        url="YozoraMel.csv";
        headerName="Yozora Mel";
        break;
    case "UCdn5BQ06XqgXoAxIhbqw5Rg":
        url="ShirakamiFubuki.csv";
        headerName="Shirakami Fubuki";
        break;
    case "UCQ0UDLQCjY0rmuxCDE38FGg":
        url="NatsuiroMatsuri.csv";
        headerName="Natsuiro Matsuri";
        break;
    case "UC1CfXB_kRs3C-zaeTG3oGyg":
        url="AkaiHaato.csv";
        headerName="Akai Haato";
        break;
    case "UCFTLzh12_nrtzqBPsTCqenA":
        url="AkiRosenthal.csv";
        headerName="Aki Rosenthal";
        break;
    case "UC1suqwovbL1kzsoaZgFZLKg":
        url="YuzukiChoco.csv";
        headerName="Yuzuki Choco";
        break;
    case "UCvzGlP9oQwU--Y0r9id_jnA":
        url="OozoraSubaru.csv";
        headerName="Oozora Subaru";
        break;
    case "UC7fk0CB07ly8oSl0aqKkqFg":
        url="NakiriAyame.csv";
        headerName="Nakiri Ayame";
        break;
    case "UCXTpFs_3PqI41qX2d9tL2Rw":
        url="MurasakiShion.csv";
        headerName="Murasaki Shion";
        break;
    case "UC1opHUrw8rvnsadT-iGp7Cg":
        url="MinatoAqua.csv";
        headerName="Minato Aqua";
        break;
    case "UC1DCedRgGHBdm81E1llLhOQ":
        url="UsadaPekora.csv";
        headerName="Usada Pekora";
        break;
    case "UCdyqAaZDKHXg4Ahi7VENThQ":
        url="ShiroganeNoel.csv";
        headerName="Shirogane Noel";
        break;
    case "UCvInZx9h3jC2JzsIzoOebWg":
        url="ShiranuiFlare.csv";
        headerName="Shiranui Flare";
        break;
    case "UCCzUftO8KOVkV4wQG1vkUvg":
        url="HoushouMarine.csv";
        headerName="Houshou Marine";
        break;
    case "UCqm3BQLlJfvkTsX_hvm0UmA":
        url="TsunomakiWatame.csv";
        headerName="Tsunomaki Watame";
        break;
    case "UC1uv2Oq6kNxgATlCiez59hw":
        url="TokoyamiTowa.csv";
        headerName="Tokoyami Towa";
        break;
    case "UCZlDXzGoo7d44bwdNObFacg":
        url="AmaneKanata.csv";
        headerName="Amane Kanata";
        break;
    case "UCa9Y57gfeY0Zro_noHRVrnw":
        url="HimemoriLuna.csv";
        headerName="Himemori Luna";
        break;
    case "UCFKOVgVbGmX65RxO3EtH3iw":
        url="YukihanaLamy.csv";
        headerName="Yukihana Lamy";
        break;
    case "UCUKD-uaobj9jiqB-VXt71mA":
        url="ShishiroBotan.csv";
        headerName="Shishiro Botan";
        break;
    case "UCK9V2B22uJYu3N7eR_BT9QA":
        url="OmaruPolka.csv";
        headerName="Omaru Polka";
        break;
    case "UCAWSyEs_Io8MtpY3m-zqILA":
        url="MomosuzuNene.csv";
        headerName="Momosuzu Nene";
        break;
    case "UCsUj0dszADCGbF3gNrQEuSQ":
        url="TsukumoSana.csv";
        headerName="Tsukumo Sana";
        break;
    case "UCmbs8T6MWqUHP1tIQvSgKrg":
        url="OuroKronii.csv";
        headerName="Ouro Kronii";
        break;
    case "UC3n5uGu18FoCy23ggWWp8tA":
        url="NanashiMumei.csv";
        headerName="Nanashi Mumei";
        break;
    case "UCO_aKKYxn4tvrqPjcTzZ6EQ":
        url="CeresFauna.csv";
        headerName="Ceres Fauna";
        break;
    case "UCgmPnx-EEeOrZSg5Tiw7ZRQ":
        url="HakosBaelz.csv";
        headerName="Hakos Baelz";
        break;
    case "UCyl1z3jo3XHR1riLFKG5UAg":
        url="WatsonAmelia.csv";
        headerName="Watson Amelia";
        break;
    case "UCHsx4Hqa-1ORjQTh9TYDhww":
        url="TakanashiKiara.csv";
        headerName="Takanashi Kiara";
        break;
    case "UCMwGHR0BTZuLsmjY_NT5Pwg":
        url="NinomaeInanis.csv";
        headerName="Ninomae Ina’nis";
        break;
    case "UCL_qhgtOy0dy1Agp8vkySQg":
        url="MoriCalliope.csv";
        headerName="Mori Calliope";
        break;
    case "UCoSrY_IQQVpmIRZ9Xf-y93g":
        url="GawrGura.csv";
        headerName="Gawr Gura";
        break;
    case "UCP0BspO_AMEe3aQqqpo89Dg":
        url="MoonaHoshinova.csv";
        headerName="Moona Hoshinova";
        break;
    case "UCAoy6rzhSf4ydcYjJw3WoVg":
        url="AiraniIofifteen.csv";
        headerName="Airani Iofifteen";
        break;
    case "UCOyYb1c43VlX9rc_lT6NKQw":
        url="AyundaRisu.csv";
        headerName="Ayunda Risu";
        break;
    case "UChgTyjG-pdNvxxhdsXfHQ5Q":
        url="PavoliaReine.csv";
        headerName="Pavolia Reine";
        break;
    case "UCYz_5n-uDuChHtLo7My1HnQ":
        url="KureijiOllie.csv";
        headerName="Kureiji Ollie";
        break;
    case "UC727SQYUvx5pDDGQpTICNWg":
        url="AnyaMelfissa.csv";
        headerName="Anya Melfissa";
        break;
    case "UC8rcEBzJSleTkf_-agPM20g":
        url="IRyS.csv";
        headerName="IRyS";
        break;
}
//header名字改掉
document.getElementById("VName").innerText=headerName;

//第一張粉絲成長圖
// set the dimensions and margins of the graph
var margin = {top: 20, right: 70, bottom: 50, left: 90},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//set ranges
var x=d3.scaleTime()
    .range([0,width]);

var y = d3.scaleLinear()
    .range([height, 0]);

//make svg
var svg = d3.select("#num").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("class","firstChart")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv(url).then(function(data) {
// format the data
data.forEach(function(d) {
    //Datetime String 轉成日期的格式
    d.Datetime=new Date(d.Datetime)

    //訂閱數
    if(d.Subscribers=="Debut"){
        d.Subscribers=0
    }
    else{
        d.Subscribers=parseInt(d.Subscribers)
    }
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.Datetime; }));
y.domain([0, d3.max(data, function(d) { return d.Subscribers })]);

// Add the valueline path.
svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", d3.line()
        .x(function(d){return x(d.Datetime)})
        .y(function(d){return y(d.Subscribers)})
      );

// Add the x Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// text label for the x axis
svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("日期");

// Add the y Axis
svg.append("g")
    .call(d3.axisLeft(y));

// text label for the y axis
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("訂閱成長數");      

});


//開始做第二張圖
//日曆selectors
document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) {
    var datePassed=new Date(e.target.value)
    //這邊其實有error要去抓 出事
    reDraw(datePassed);
});
document.querySelector('jsuites-calendar').addEventListener('onclose', function(e) {
    console.log('Calendar is closed');
});
//按下日曆之後重新畫圖
function reDraw(datePassed){
    var req="https://holodex.net/api/v2/videos?channel_id="+id
    var foundGate=0;
    var finalIndex;
    var maxLiveTLCount=0;
    var maxDuration=0;
    fetch(req)
        .then((res) => {
            const data2 = res.json();
            return data2;
        })
        .then((data2) => {
            console.log(data2)
            //找到開台的每一天
            data2.forEach((element,index) => {
                // ...use `element`...
                element.published_at=new Date(element.published_at)

                //undefined的話轉成0
                if(element.live_tl_count==undefined){
                    element.live_tl_count=0;
                }
                //其他String轉成數字
                var str=JSON.stringify(element.live_tl_count)
                var numb = str.match(/\d/g);
                numb = numb.join("");
                element.live_tl_count=parseInt(numb);
                
                //找出max tl_count
                if(element.live_tl_count>maxLiveTLCount){
                    maxLiveTLCount=element.live_tl_count;
                }
                //console.log(maxLiveTLCount)
                //console.log(element.live_tl_count)
                //找出max_duration
                //console.log(element.duration)
                if(element.duration>maxDuration){
                    maxDuration=element.duration;
                }

                //找出日期
                if(datePassed.getMonth()==element.published_at.getMonth()){
                    if(datePassed.getDate()==element.published_at.getDate()){
                        foundGate=1;
                        finalIndex=index;
                    }
                }
            });
        //對出有沒有找到
        if (foundGate==1){
            //繼續往下做!可以畫圖
            //先reset svg
            d3.select("#RadarChart").selectAll('*').remove();
            //
            document.getElementById("explaination").innerText="開台時間: "+data2[finalIndex].published_at ;
            document.getElementById("title").innerText="標題:"+data2[finalIndex].title;
            //有搜尋到的條目
            console.log(data2[finalIndex])
            //總人數:console.log(maxLiveTLCount)
            var liveTLCount=data2[finalIndex].live_tl_count;
            var durationCount=data2[finalIndex].duration;
            //總時長console.log(maxDuration);
            var liveCountCheck=10*liveTLCount/maxLiveTLCount;
            var durationFinal=10*durationCount/maxDuration;
            var liveCountFinal;
            if(isNaN(liveCountCheck)){
                liveCountFinal=0;
            }
            else{
                liveCountFinal=liveCountCheck;
            }
            drawRadarGraph(liveCountFinal,durationFinal,durationCount,maxDuration,liveTLCount,maxLiveTLCount);
        }
        else{
            document.getElementById("explaination").innerText="此Vtuber在: "+datePassed+" 並沒有開台";
            document.getElementById("title").innerText="";
            var svg2=d3.select("#RadarChart")
            svg2.selectAll('*').remove();
        }
    });
}
function drawRadarGraph(liveCountFinal,durationFinal,durationCount,maxDuration,liveTLCount,maxLiveTLCount){
    let data = [];
        let var1=liveCountFinal;
        let var2=durationFinal;
        var var3=0
        var colorTheme;
        //SC部分:深藍、淺藍、綠、黃、橘、紫、紅
        const sc = ["深藍", "淺藍", "綠", "黃", "橘", "紫", "紅"];
        const random = Math.floor(Math.random() * sc.length);
        switch (sc[random]) {
        case "深藍":
            var3=10/7;
            colorTheme="#0000E3";
            break;
        case "淺藍":
            var3=10*2/7;
            colorTheme="#0080FF";
            break;
        case "綠":
            var3=10*3/7;
            colorTheme="#00EC00";
            break;
        case "黃":
            var3=10*4/7;
            colorTheme="#F9F900";
            break;
        case "橘":
            var3=10*5/7;
            colorTheme="#FF9500";
            break;
        case "紫":
            var3=10*6/7;
            colorTheme="#D900FF";
            break;
        case "紅":
            var3=10;
            colorTheme="#FF0D00";
        }
        var features = ["Live Viewers:"+liveTLCount+"人/最多"+maxLiveTLCount+"人","時長:"+durationCount+"秒/最長"+maxDuration+"秒","SuperChat: 最多"+sc[random]+"色"];

        //generate the data
        for (var i = 0; i < 1; i++){
            var point = {}
            var counter=0;
            features.forEach(function(f){
                if(counter==0){
                    point[f] = var1;
                }
                else if(counter==1){
                    point[f] = var2;
                }
                else{
                    point[f] = var3;
                }
                counter+=1;
            });
            data.push(point);
        }
        console.log(data)
        let svg = d3.select("#RadarChart").append("svg")
        .attr("width", 1000)
        .attr("height",600)

        let radialScale = d3.scaleLinear()
        .domain([0,10])
        .range([0,200]);
        let ticks = [2,4,6,8,10];
        
        ticks.forEach(t =>
            svg.append("circle")
            .attr("cx", 300)
            .attr("cy", 300)
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("r", radialScale(t))
        );
        
        //add ticks
        ticks.forEach(t =>
            svg.append("text")
            .attr("x", 305)
            .attr("y", 300 - radialScale(t))
            .text(10*t.toString()+"%")
        );

        function angleToCoordinate(angle, value){
            let x = Math.cos(angle) * radialScale(value);
            let y = Math.sin(angle) * radialScale(value);
            return {"x": 300 + x, "y": 300 - y};
        }
        
        for (var i = 0; i < features.length; i++) {
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            let line_coordinate = angleToCoordinate(angle, 10);
            let label_coordinate = angleToCoordinate(angle, 12);

            //draw axis line
            svg.append("line")
            .attr("x1", 300)
            .attr("y1", 300)
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke","black");

            //draw axis label
            
            //.text(ft_name);
            svg.append("text")
            .attr("x", label_coordinate.x)
            .attr("y", label_coordinate.y)
            .text(ft_name)
            
        }

        let line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

        function getPathCoordinates(data_point){
            let coordinates = [];
            for (var i = 0; i < features.length; i++){
                let ft_name = features[i];
                let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
                coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
            }
            return coordinates;
        }

        for (var i = 0; i < data.length; i ++){
            let d = data[i];
            let color = colorTheme;
            let coordinates = getPathCoordinates(d);

            //draw the path element
            svg.append("path")
            .datum(coordinates)
            .attr("d",line)
            .attr("stroke-width", 3)
            .attr("stroke", color)
            .attr("fill", color)
            .attr("stroke-opacity", 1)
            .attr("opacity", 0.5);
        }
}