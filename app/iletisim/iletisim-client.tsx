"use client"

import type React from "react"
import { useState } from "react"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import Footer from "@/components/footer"

export default function IletisimClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Merhaba! Retto Creative ile iletişime geçmek istiyorum.

📝 *Bilgilerim:*
👤 Ad Soyad: ${formData.name}
📧 E-posta: ${formData.email}
📱 Telefon: ${formData.phone}
🎯 Hizmet: ${formData.service}

💬 *Mesajım:*
${formData.message}

Detaylı bilgi almak istiyorum. Teşekkürler!`

    const whatsappUrl = `https://wa.me/905308330137?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactItems = [
    { label: "E-posta", value: "hello@rettocreative.net", sub: "7/24 yanıtlıyoruz", href: "mailto:hello@rettocreative.net" },
    { label: "Telefon", value: "0530 833 01 37", sub: "Mesai saatleri içinde", href: "tel:+905308330137" },
    { label: "Lokasyon", value: "İzmir, Türkiye", sub: "Uzaktan çalışıyoruz", href: null },
    { label: "Çalışma Saatleri", value: "Pazartesi - Cuma", sub: "09:00 - 18:00", href: null },
  ]

  return (
    <>
      <ScrollHeader />
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingTop: "64px", paddingBottom: "80px" }}>

        {/* Hero Section */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "clamp(60px, 10vh, 120px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>
              Projeleriniz İçin
            </p>
            <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 300, color: "#000", margin: "0 0 16px 0", lineHeight: 1.1 }}>
              İletişim
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "#666", fontWeight: 300, margin: 0 }}>
              Size en uygun çözümü birlikte bulalım
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "clamp(40px, 6vh, 80px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(40px, 6vw, 80px)" }}>

              {/* Contact Info */}
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
                  İletişim
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 300, color: "#000", margin: "0 0 24px 0" }}>
                  Bize Ulaşın
                </h2>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, fontWeight: 300, marginBottom: "40px" }}>
                  Projeleriniz hakkında konuşmak ve size nasıl yardımcı olabileceğimizi keşfetmek için bizimle iletişime geçin.
                </p>

                <div>
                  {contactItems.map((item, i) => (
                    <div key={i}>
                      <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                      <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(16px, 3vw, 40px)", padding: "clamp(16px, 2.5vh, 24px) 0" }}>
                        <span style={{ fontSize: "11px", fontWeight: 400, color: "#bbb", letterSpacing: "0.15em", flexShrink: 0, minWidth: "100px" }}>
                          {item.label}
                        </span>
                        <div>
                          {item.href ? (
                            <a href={item.href} style={{ fontSize: "clamp(14px, 1.6vw, 18px)", fontWeight: 400, color: "#000", textDecoration: "none", display: "block", marginBottom: "4px" }}>
                              {item.value}
                            </a>
                          ) : (
                            <span style={{ fontSize: "clamp(14px, 1.6vw, 18px)", fontWeight: 400, color: "#000", display: "block", marginBottom: "4px" }}>
                              {item.value}
                            </span>
                          )}
                          <span style={{ fontSize: "12px", color: "#999", fontWeight: 300 }}>{item.sub}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                </div>

                <div style={{ marginTop: "32px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>
                    Sosyal Medya
                  </p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a
                      href="https://www.instagram.com/rettocreative/"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000" }}
                      aria-label="Instagram"
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/905308330137"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000" }}
                      aria-label="WhatsApp"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px", padding: "clamp(24px, 4vw, 48px)" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
                    Form
                  </p>
                  <h2 style={{ fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 300, color: "#000", margin: "0 0 8px 0" }}>
                    WhatsApp ile İletişim
                  </h2>
                  <p style={{ fontSize: "14px", color: "#666", fontWeight: 300, marginBottom: "32px" }}>
                    Formu doldurun, WhatsApp üzerinden size hemen ulaşalım!
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label htmlFor="name" style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "8px", fontWeight: 400 }}>
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ width: "100%", padding: "12px 16px", background: "transparent", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000", fontSize: "14px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "8px", fontWeight: 400 }}>
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ width: "100%", padding: "12px 16px", background: "transparent", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000", fontSize: "14px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label htmlFor="phone" style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "8px", fontWeight: 400 }}>
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{ width: "100%", padding: "12px 16px", background: "transparent", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000", fontSize: "14px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
                          placeholder="+90 (555) 123 45 67"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "8px", fontWeight: 400 }}>
                          Hizmet Türü
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          style={{ width: "100%", padding: "12px 16px", background: "#fff", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000", fontSize: "14px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
                        >
                          <option value="">Seçiniz</option>
                          <option value="Logo Tasarımı">Logo Tasarımı</option>
                          <option value="Kurumsal Kimlik">Kurumsal Kimlik</option>
                          <option value="Web Sitesi">Web Sitesi</option>
                          <option value="Sosyal Medya Yönetimi">Sosyal Medya Yönetimi</option>
                          <option value="Marka Tescil">Marka Tescil</option>
                          <option value="Video & Fotoğraf Prodüksiyon">Video & Fotoğraf Prodüksiyon</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "8px", fontWeight: 400 }}>
                        Mesajınız *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        style={{ width: "100%", padding: "12px 16px", background: "transparent", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "10px", color: "#000", fontSize: "14px", fontWeight: 300, outline: "none", resize: "none", boxSizing: "border-box" }}
                        placeholder="Projeniz hakkında detayları paylaşın..."
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ width: "100%", background: "#25D366", color: "#fff", border: "none", borderRadius: "10px", padding: "14px 24px", fontSize: "14px", fontWeight: 300, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", letterSpacing: "0.05em" }}
                    >
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <span>WhatsApp ile Gönder</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  )
}
