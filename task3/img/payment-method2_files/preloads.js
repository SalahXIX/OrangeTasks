
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.d86eb7ca91abe49cfc2c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.en.0a84aa5607f1d542fe5e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6605.latest.en.0a027deb4f4e87ae29a9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.3c0bca9f1cd041696297.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4886.latest.en.974c2afe18ad120a9bff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8831.latest.en.4f63c3110b718c42d63d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/434.latest.en.2a0c4c9c966432104343.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5832.latest.en.2d9e9313aa8eb8aefad8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1667.latest.en.b1e5f4e7ca87662297b0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.en.efb8b8ae23e496098df7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.80d8e9bc97f56cf1fea8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.en.40cc870ad0f292b10d20.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.8ae030d5b62ddbf3a670.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.3e483127dbf554cf988e.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  