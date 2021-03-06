// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
(function () {
    "use strict";

    var config = require("../../config.js");

    module.exports = {
        publishWinJsBower: {
            options: {
                cwd: config.winjsBowerRepo,
                all: true
            }
        },
        publishLocalizationBower: {
            options: {
                cwd: config.localizationBowerRepo,
                all: true
            }
        }
    };
})();