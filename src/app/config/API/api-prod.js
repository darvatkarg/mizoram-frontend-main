const protocol = "https";
// const host = "api.elibrarysmartcityadmin.education";
const host = "api.elibrarysmartcity.mizoram.gov.in"
// const host = "103.86.177.17"
const port = "";
const trailUrl = "";

// const protocol = "http";
// const host = "192.168.29.22";
// const port = "8088";
// const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

// const hostUrl = `http://192.168.29.134:5000`;
// const endpoint = `http://192.168.29.134:5000`;

const config = {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
export default config;
