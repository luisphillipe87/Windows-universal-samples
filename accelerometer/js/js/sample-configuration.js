﻿//*********************************************************
//
// Copyright (c) Microsoft. All rights reserved.
// This code is licensed under the MIT License (MIT).
// THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY
// IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR
// PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.
//
//*********************************************************

(function () {
    "use strict";

    var sampleTitle = "AccelerometerJS";

    var scenarios = [
        { url: "/html/scenario1_DataEvents.html", title: "Data Events" },
        { url: "/html/scenario2_ShakeEvents.html", title: "Shake Events" },
        { url: "/html/scenario3_Polling.html", title: "Polling" },
        { url: "/html/scenario4_OrientationChanged.html", title: "OrientationChanged Handling" },
        { url: "/html/scenario5_DataEventsBatching.html", title: "Data Events Batching" }
    ];

    WinJS.Namespace.define("SdkSample", {
        sampleTitle: sampleTitle,
        scenarios: new WinJS.Binding.List(scenarios)
    });
})();