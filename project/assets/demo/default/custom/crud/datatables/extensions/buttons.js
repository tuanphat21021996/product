var DatatablesExtensionButtons= {
        init:function() {
            var t;
            $("#m_table_1").DataTable( {
                    responsive:!0, dom:"<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>\n\t\t\t<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>", buttons:["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"], columnDefs:[ {
                        targets:6, render:function(t, e, a, n) {
                            var s= {
                                    1: {
                                        title: "Pending", class: "m-badge--brand"
                                    }
                                    , 2: {
                                        title: "Delivered", class: " m-badge--metal"
                                    }
                                    , 3: {
                                        title: "Canceled", class: " m-badge--primary"
                                    }
                                    , 4: {
                                        title: "Success", class: " m-badge--success"
                                    }
                                    , 5: {
                                        title: "Info", class: " m-badge--info"
                                    }
                                    , 6: {
                                        title: "Danger", class: " m-badge--danger"
                                    }
                                    , 7: {
                                        title: "Warning", class: " m-badge--warning"
                                    }
                                }
                            ;
                            return void 0===s[t]?t:'<span class="m-badge '+s[t].class+' m-badge--wide">'+s[t].title+"</span>"
                        }
                    }
                        , {
                            targets:7, render:function(t, e, a, n) {
                                var s= {
                                        1: {
                                            title: "Online", state: "danger"
                                        }
                                        , 2: {
                                            title: "Retail", state: "primary"
                                        }
                                        , 3: {
                                            title: "Direct", state: "accent"
                                        }
                                    }
                                ;
                                return void 0===s[t]?t:'<span class="m-badge m-badge--'+s[t].state+' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-'+s[t].state+'">'+s[t].title+"</span>"
                            }
                        }
                    ]
                }
            ),
                t=$("#m_table_2").DataTable( {
                        responsive:!0, buttons:["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"], processing:!0, serverSide:!0, ajax: {
                            url:"inc/api/datatables/demos/server.php", type:"POST", data: {
                                columnsDef: ["OrderID", "Country", "ShipCity", "ShipAddress", "CompanyAgent", "CompanyName", "Status", "Type"]
                            }
                        }
                        , columns:[ {
                            data: "OrderID"
                        }
                            , {
                                data: "Country"
                            }
                            , {
                                data: "ShipCity"
                            }
                            , {
                                data: "ShipAddress"
                            }
                            , {
                                data: "CompanyAgent"
                            }
                            , {
                                data: "CompanyName"
                            }
                            , {
                                data: "Status"
                            }
                            , {
                                data: "Type"
                            }
                        ], columnDefs:[ {
                            targets:6, render:function(t, e, a, n) {
                                var s= {
                                        1: {
                                            title: "Pending", class: "m-badge--brand"
                                        }
                                        , 2: {
                                            title: "Delivered", class: " m-badge--metal"
                                        }
                                        , 3: {
                                            title: "Canceled", class: " m-badge--primary"
                                        }
                                        , 4: {
                                            title: "Success", class: " m-badge--success"
                                        }
                                        , 5: {
                                            title: "Info", class: " m-badge--info"
                                        }
                                        , 6: {
                                            title: "Danger", class: " m-badge--danger"
                                        }
                                        , 7: {
                                            title: "Warning", class: " m-badge--warning"
                                        }
                                    }
                                ;
                                return void 0===s[t]?t:'<span class="m-badge '+s[t].class+' m-badge--wide">'+s[t].title+"</span>"
                            }
                        }
                            , {
                                targets:7, render:function(t, e, a, n) {
                                    var s= {
                                            1: {
                                                title: "Online", state: "danger"
                                            }
                                            , 2: {
                                                title: "Retail", state: "primary"
                                            }
                                            , 3: {
                                                title: "Direct", state: "accent"
                                            }
                                        }
                                    ;
                                    return void 0===s[t]?t:'<span class="m-badge m-badge--'+s[t].state+' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-'+s[t].state+'">'+s[t].title+"</span>"
                                }
                            }
                        ]
                    }
                ),
                $("#export_print").on("click", function(e) {
                        e.preventDefault(), t.button(0).trigger()
                    }
                ),
                $("#export_copy").on("click", function(e) {
                        e.preventDefault(), t.button(1).trigger()
                    }
                ),
                $("#export_excel").on("click", function(e) {
                        e.preventDefault(), t.button(2).trigger()
                    }
                ),
                $("#export_csv").on("click", function(e) {
                        e.preventDefault(), t.button(3).trigger()
                    }
                ),
                $("#export_pdf").on("click", function(e) {
                        e.preventDefault(), t.button(4).trigger()
                    }
                )
        }
    }

;
jQuery(document).ready(function() {
        DatatablesExtensionButtons.init()
    }

);