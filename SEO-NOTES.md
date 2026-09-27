# Retto Creative SEO çalışması

Hedef alan adı: https://rettocreative.net
Öncelikli hizmetler: web sitesi, logo tasarımı, kurumsal kimlik.

## Düzeltilen sorunlar

- SEO adresleri yanlış .com alan adından .net alan adına taşındı.
- Ana sayfa canonical bilgisi alt sayfalara miras bırakılmıyor; içerik sayfalarına kendi adresleri ve açıklamaları verildi.
- Blog listesi gerçek yazılarla aynı kaynaktan besleniyor; sayısal kimliklere giden kırık bağlantılar kaldırıldı.
- Site haritası hizmet, blog ve proje içeriklerinden üretiliyor. Uydurma güncelleme tarihleri ve bulunmayan ikinci site haritası kaldırıldı.
- Doğrulanmamış 100 değerlendirme/5 yıldız, şehir merkezini işletme konumu gibi gösteren koordinatlar ve olmayan site içi arama tanımı kaldırıldı.
- Ajans, hizmet ve yazı bilgileri görünür içerikle uyumlu yapılandırılmış veriyle tanımlandı.
- Ana sayfaya görünür, sunucuda üretilen hizmet açıklaması ve bağlantılar eklendi; boş H1 kaldırıldı.
- Telefonlarda yakınlaştırma engeli kaldırıldı. Tasarım deneme sayfası arama indeksinden çıkarıldı.
- Sahte Search Console doğrulama değeri kaldırıldı. Gerçek değer GOOGLE_SITE_VERIFICATION ortam değişkeniyle verilebilir.

## Yayına çıkmadan önce

1. Alan adının yayın ortamında rettocreative.net olduğunu ve www sürümünün tek tercih edilen adrese kalıcı yönlendiğini doğrulayın. Sahip olmadığınız .com alan adından yönlendirme yapılamaz.
2. Proje başarı iddialarını belgeleriyle kontrol edin. Mevcut proje içeriklerinde yüzde artışları, 500K indirme ve ödül iddiaları var. Bu çalışma bu iddiaları doğrulamadı; kanıtlanamayanları yayınlamayın.
3. Projelerin müşteri adlarını, görsellerini ve yayın izinlerini doğrulayın. Bazı eski proje görsellerinin dosya yolları ayrıca kontrol edilmeli.
4. Next.js 14.2.25 ve React 19 kullanan mevcut bağımlılık düzeni ayrı bir güncelleme çalışması gerektiriyor. Bağımlılık kurulumu Next.js için güvenlik uyarısı verdi; bu SEO değişikliği sürüm yükseltmesi yapmaz.

## Yayından sonra

- Google Search Console'da .net alan adı sahipliğini doğrulayın; /sitemap.xml gönderin. Ana sayfa ve üç öncelikli hizmeti URL Denetimi ile kontrol edin.
- Bing Webmaster Tools'da aynı alan adını ve site haritasını kaydedin.
- Google Rich Results Test ve Schema Markup Validator ile yapılandırılmış veriyi kontrol edin. Şema eklemek sıralama veya yapay zekâ önerisi garantisi değildir.
- Mobil PageSpeed Insights ve gerçek kullanıcı verileriyle LCP, INP ve CLS ölçün. Ana sayfadaki 3D model, açılış animasyonu ve video öncelikli performans inceleme alanlarıdır; bu çalışmada canlı performans puanı ölçülmedi.
- Google İşletme Profili, Instagram ve gerçek müşteri referanslarında ad, alan adı ve iletişim bilgilerini tutarlı kullanın.

## Önerilme hedefi için içerik planı

1. Üç gerçek vaka çalışması: müşterinin ihtiyacı, üstlenilen kapsam, tasarım kararları, teslim edilen işler ve yalnızca belgelenmiş sonuçlar. Öncelik her ana hizmetten bir örnek.
2. Web sitesi hizmeti: teklif kapsamı, mobil kullanım, içerik sorumluluğu, teslim süreci, bakım ve ölçüm konularını gerçek çalışma biçiminizle açıklayın.
3. Logo ve kurumsal kimlik: aralarındaki farkı, dosya teslimlerini, marka kılavuzunu, revizyonları ve kullanım haklarını sözleşmenize uygun anlatın.
4. Kurucu/yazar bilgisi ve deneyimi: doğrulanabilir portfolyo ve uzmanlık bilgileriyle görünür biyografi hazırlayın.
5. Bağımsız müşteri yorumları ve gerçek sektörel yayınlar kazanın. Satın alınmış bağlantı ve uydurma değerlendirme kullanmayın.

Ölçüm: marka dışı hizmet sorgularından gösterim ve tıklamalar, teklif talepleri ve bunların dönüşüm oranları. Yapay zekâ yanıtlarında görünürlüğü aynı sorgu gruplarında tarih ve kaynaklarla takip edin; yanıtlar kullanıcıya ve zamana göre değişir.

Kaynak: https://developers.google.com/search/docs/appearance/ai-features
Google, AI Overviews/AI Mode için ayrı bir özel şema veya AI metin dosyası gerekmediğini; temel SEO, erişilebilir içerik ve güvenilir bilginin esas olduğunu belirtiyor.

## Doğrulama sonucu

- 23 URL için tek ve doğru .net canonical adresi; JSON-LD ayrıştırması; ana sayfa başlığı ve hizmet bağlantıları; üç blog bağlantısı; robots ve deneme sayfası noindex kontrolü geçti.
- Yeniden çalıştırma: üretim derlemesinden sonra `node scripts/check-seo.cjs`.
- Standart derleme Google Fonts ağ erişimi ve ardından disk alanı sorunu nedeniyle tamamlanamadı. Geçici derleme önbelleği temizlendi; yalnızca doğrulama sırasında font yanıtı yerel fontla değiştirildi ve webpack önbelleği kapatıldı. Bu koşullarda 30 statik çıktı üretildi. Bu test ayarları depoya alınmadı; gerçek Poppins indirimi/yayını ayrıca doğrulanmalı.
- `tsc --noEmit` mevcut, değiştirilmemiş dosyalardaki hatalar nedeniyle başarısız. SEO değişikliğine ait dosyalarda tip hatası raporlanmadı. Proje ayarları zaten derleme sırasında tip ve lint kontrollerini atlıyor.
- Canlı alan adının HTTP/indeksleme durumu ve gerçek kullanıcı performansı bu ortamda doğrulanamadı.
- Blog içeriklerinde iki eski görsel yolu (`socialmedia1.png`, `responsive-website-mockup.png`) depoda bulunmuyor. Gerçek ilgili görseller sağlanmalı; eksik görseller başarı kanıtı gibi başka projelerle değiştirilmedi.
