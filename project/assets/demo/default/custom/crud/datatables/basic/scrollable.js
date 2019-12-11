var DatatablesBasicScrollable= {
        init:function() {
            var e;
            (e = $("#m_table_2")).DataTable( {
                        scrollY:"50vh", scrollX:!0, scrollCollapse:!0, createdRow:function(a, e, t) {
                            var n= {
                                1: {
                                    title: "Không được duyệt", state: "danger"
                                }
                                , 2: {
                                    title: "Chờ duyệt", state: "primary"
                                }
                                , 3: {
                                    title: "Đã được duyệt", state: "accent"
                                }
                            }
                                , l='<span class="m-badge '+n[e[18]].class+' m-badge--wide">'+n[e[18]].title+"</span>";
                            a.getElementsByTagName("td")[18].innerHTML=l, l='<span class="m-badge m-badge--'+(n= {
                                    1: {
                                        title: "Không được duyệt", state: "danger"
                                    }
                                    , 2: {
                                        title: "Chờ duyệt", state: "primary"
                                    }
                                    , 3: {
                                        title: "Đã được duyệt", state: "accent"
                                    }
                                }
                            )[e[18]].state+' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-'+n[e[18]].state+'">'+n[e[18]].title+"</span>", a.getElementsByTagName("td")[18].innerHTML=l
                        },
                        order:[[1, "desc"]], headerCallback:function(e, a, t, n, s) {
                            e.getElementsByTagName("th")[0].innerHTML='\n                   ' +
                                ' <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">\n                        ' +
                                '<input type="checkbox" value="" class="m-group-checkable">\n                        ' +
                                '<span></span>\n                   ' +
                                ' </label>'
                        }
                        , columnDefs:[
                        {
                            targets:0, width:"30px", className:"dt-right", orderable:!1, render:function(e, a, t, n) {
                                return'\n                        <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">\n                            ' +
                                    '<input type="checkbox" value="" class="m-checkable">\n                           ' +
                                    ' <span></span>\n                        ' +
                                    '</label>'
                            }
                        }

                            ,{
                            targets:-2, title:"Detail", orderable:!1, render:function(a, e, t, n) {
                                return'\n <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" title="View">\n                          <i class="fa fa-eye"></i>\n                        </a>'
                            }
                        }
                        ,{
                        targets:-1, title:"", orderable:!1, render:function(e, a, t, n) {
                            return'\n <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" title="View">\n                          ' +
                                '<i class="la la-edit"></i>\n                        </a>'
                        }
                    }


                        ]
                    }
                ),
                e.on("change", ".m-group-checkable", function() {
                    var e=$(this).closest("table").find("td:first-child .m-checkable"),
                        a=$(this).is(":checked");
                    $(e).each(function() {
                            a?($(this).prop("checked", !0),
                                $(this).closest("tr").addClass("active")): ($(this).prop("checked", !1),
                                $(this).closest("tr").removeClass("active"))
                        }
                    )
                }
            ),
                e.on("change", "tbody tr .m-checkbox", function() {
                        $(this).parents("tr").toggleClass("active")
                    }
                )
        }
    }

;
jQuery(document).ready(function() {
        DatatablesBasicScrollable.init()
    }

);