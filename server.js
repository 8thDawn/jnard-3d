const express = require('express');
const app = require(express());

const port = 5000;

app.listen(port, 
    console.log(`Server running on ${port}`));