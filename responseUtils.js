const doResponse = (res, status, header1, header2, end) => {
    res.statusCode = status;
    res.setHeader(header1, header2);
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(end);
};

const doJsonResponse = (res, status, json) => {
    doResponse(res, status, 'Content-Type', 'text/json', json);
}

const doErrorResponse = (res, err) => {
    doJsonResponse(res, 500, JSON.stringify(err));
}

const doSuccessResponse = (res, payload) => {
    doJsonResponse(res, 200, JSON.stringify(payload))
}

module.exports = {
    doResponse,
    doJsonResponse,
    doErrorResponse,
    doSuccessResponse
}
