* ALPN, offering h2
* ALPN, offering http/1.1
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
* TLSv1.0 (OUT), TLS header, Certificate Status (22):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS header, Certificate Status (22):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS header, Finished (20):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.2 (OUT), TLS header, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN, server accepted to use h2
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Cloudflare, Inc.; CN=sni.cloudflaressl.com
*  start date: Jun  6 00:00:00 2022 GMT
*  expire date: Jun  5 23:59:59 2023 GMT
*  subjectAltName: host "jsonplaceholder.typicode.com" matched cert's "*.typicode.com"
*  issuer: C=US; O=Cloudflare, Inc.; CN=Cloudflare Inc ECC CA-3
*  SSL certificate verify ok.
* Using HTTP2, server supports multiplexing
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* Using Stream ID: 1 (easy handle 0x56273b3f4560)
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
> GET /posts/1/comments HTTP/2
> Host: jsonplaceholder.typicode.com
> user-agent: curl/7.81.0
> accept: */*
>
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Connection state changed (MAX_CONCURRENT_STREAMS == 256)!
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
< HTTP/2 200
< date: Tue, 14 Mar 2023 03:03:27 GMT
< content-type: application/json; charset=utf-8
< x-powered-by: Express
< x-ratelimit-limit: 1000
< x-ratelimit-remaining: 999
< x-ratelimit-reset: 1678723718
< vary: Origin, Accept-Encoding
< access-control-allow-credentials: true
< cache-control: max-age=43200
< pragma: no-cache
< expires: -1
< x-content-type-options: nosniff
< etag: W/"5e6-4bSPS5tq8F8ZDeFJULWh6upjp7U"
< via: 1.1 vegur
< cf-cache-status: REVALIDATED
< server-timing: cf-q-config;dur=5.9999874792993e-06
< report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=ZrM7L66HRRuy94cA%2BUYGMzd6giDb2xH%2BKRm5%2Faf%2BBJATUCD7dwUaenF4muyN6IuBT3fwmzte6pUX9J1JPiXCqXPJi%2Bt32iRwiXMX9psOX78%2FbggtcXTAnZ%2B7%2B0l45N%2F%2F0tT%2FRIaEfhr847mmjy78"}],"group":"cf-nel","max_age":604800}
< nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< server: cloudflare
< cf-ray: 7a79489a9845ba99-MXP
< alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
<