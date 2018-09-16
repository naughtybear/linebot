module.exports = {
    def_act:function(act_num){
        switch(act_num) {
            case "一\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "41"
                  };
            case "二\n":
                return {
                    "type": "sticker",
                    "packageId": "1",
                    "stickerId": "13"
                  };
            case "三\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "179"
                  };
            case "四\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "149"
                  };
            case "五\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "19"
                  };
            case "六\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "153"
                  };
            case "七\n":
                return {
                    "type": "sticker",
                    "packageId": "2",
                    "stickerId": "38"
                  };
            case "八\n":
                return {
                  "type": "flex",
                  "altText": "this is a flex message",
                  "contents": {
                    "type": "bubble",
                    "hero": {
                      "type": "image",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                      "size": "full",
                      "aspectRatio": "20:13",
                      "aspectMode": "cover",
                      "action": {
                        "type": "uri",
                        "uri": "http://linecorp.com/"
                      }
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Cloud Cafe",
                          "weight": "bold",
                          "size": "xl"
                        },
                        {
                          "type": "box",
                          "layout": "baseline",
                          "margin": "md",
                          "contents": [
                            {
                              "type": "icon",
                              "size": "sm",
                              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                            },
                            {
                              "type": "icon",
                              "size": "sm",
                              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                            },
                            {
                              "type": "icon",
                              "size": "sm",
                              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                            },
                            {
                              "type": "icon",
                              "size": "sm",
                              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                            },
                            {
                              "type": "icon",
                              "size": "sm",
                              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                            },
                            {
                              "type": "text",
                              "text": "4.0",
                              "size": "sm",
                              "color": "#999999",
                              "margin": "md",
                              "flex": 0
                            }
                          ]
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "margin": "lg",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "baseline",
                              "spacing": "sm",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Place",
                                  "color": "#aaaaaa",
                                  "size": "sm",
                                  "flex": 1
                                },
                                {
                                  "type": "text",
                                  "text": "嘉義縣民雄鄉大學路一段168號創新大樓114室",
                                  "wrap": true,
                                  "color": "#666666",
                                  "size": "sm",
                                  "flex": 5
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "spacing": "sm",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Time",
                                  "color": "#aaaaaa",
                                  "size": "sm",
                                  "flex": 1
                                },
                                {
                                  "type": "text",
                                  "text": "11:00 - 16:00",
                                  "wrap": true,
                                  "color": "#666666",
                                  "size": "sm",
                                  "flex": 5
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "footer": {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "button",
                          "style": "link",
                          "height": "sm",
                          "action": {
                            "type": "uri",
                            "label": "Reservation",
                            "uri": "https://cloudcoffee-e23cb.firebaseapp.com/"
                          }
                        },
                        {
                          "type": "button",
                          "style": "link",
                          "height": "sm",
                          "action": {
                            "type": "uri",
                            "label": "Call",
                            "uri": "https://cloudcoffee-e23cb.firebaseapp.com/
"
                          }
                        },
                        {
                          "type": "button",
                          "style": "link",
                          "height": "sm",
                          "action": {
                            "type": "uri",
                            "label": "WEBSITE",
                            "uri": "https://cloudcoffee-e23cb.firebaseapp.com/"
                          }
                        },
                        {
                          "type": "spacer",
                          "size": "sm"
                        }
                      ],
                      "flex": 0
                    }
                  }
                  };
            case "九\n":
                return {
                    "type": "flex",
                    "altText": "this is a flex message",
                    "contents": {
                    "type": "bubble",
                    "hero": {
                      "type": "image",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
                      "size": "full",
                      "aspectRatio": "20:13",
                      "aspectMode": "cover",
                      "action": {
                        "type": "uri",
                        "uri": "052720860"
                      }
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "md",
                      "action": {
                        "type": "uri",
                        "uri": "https://linecorp.com"
                      },
                      "contents": [
                        {
                          "type": "text",
                          "text": "Recommendation",
                          "size": "xl",
                          "weight": "bold"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "horizontal",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "cappuccino $80",
                                  "weight": "bold",
                                  "align": "center",
                                  "margin": "sm",
                                  "flex": 0
                                },
                                {
                                  "type": "text",
                                  "text": "400ml",
                                  "size": "sm",
                                  "align": "end",
                                  "color": "#aaaaaa"
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "latte $75",
                                  "weight": "bold",
                                  "margin": "sm",
                                  "align": "start",
                                  "flex": 0
                                },
                                {
                                  "type": "text",
                                  "text": "550ml",
                                  "size": "sm",
                                  "align": "end",
                                  "color": "#aaaaaa"
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Coffee of the Day $70",
                                  "weight": "bold",
                                  "margin": "sm",
                                  "align": "start",
                                  "flex": 0
                                },
                                {
                                  "type": "text",
                                  "text": "550ml",
                                  "size": "sm",
                                  "align": "end",
                                  "color": "#aaaaaa"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "footer": {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "spacer",
                          "size": "xxl"
                        },
                        {
                          "type": "button",
                          "style": "primary",
                          "color": "#905c44",
                          "action": {
                            "type": "uri",
                            "label": "Full Menu",
                            "uri": "https://cloudcoffee-e23cb.firebaseapp.com/"
                         }
                        },
                        {
                          "type": "button",
                          "style": "primary",
                          "color": "#905c44",
                          "action": {
                            "type": "uri",
                            "label": "Order",
                            "uri": "https://cloudcoffee-e23cb.firebaseapp.com/cart"
                         }
                        }
                      ]
                    }
                  }
                  };
            default:
                  return 0;
        }
    }
};
