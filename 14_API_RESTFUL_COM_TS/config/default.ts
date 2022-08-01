const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default{
    port: 3000,
    dbUri: `mongodb+srv://thales:PBIRCe54qMdbg2o0@cluster0.pxwje.mongodb.net/MyDB?retryWrites=true&w=majority`,
    env: "development"
};
