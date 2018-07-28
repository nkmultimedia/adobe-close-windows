/* Close all windows
** Version: 1.0.0
** License: Open Source (MIT)
** Copyright (c) 2018 Niranjan Kalyanasundaram
** Script to close (without saving) all open documents inside an Adobe application
*/

var docs = app.documents;
for (var i=docs.length-1; i>=0; i--)
    docs[i].close();