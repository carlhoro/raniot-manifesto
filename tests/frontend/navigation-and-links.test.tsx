import { render } from "@testing-library/react"
import Home from "@/app/page"

describe("Frontend navigation and links", () => {
  it("matches hero navigation hashes with existing sections", () => {
    render(<Home />)

    const sectionHashes = [
      "#intention",
      "#iot",
      "#architecture",
      "#Knowledge",
      "#personal",
      "#contacto",
      "#hero",
    ]

    sectionHashes.forEach((hash) => {
      const link = document.querySelector(`a[href="${hash}"]`)
      const section = document.querySelector(hash)

      expect(link).toBeInTheDocument()
      expect(section).toBeInTheDocument()
    })
  })

  it("keeps critical external links in HTTPS and opening a new tab", () => {
    render(<Home />)

    const anchors = Array.from(document.querySelectorAll("a"))
    const externalAnchors = anchors.filter((anchor) => {
      const href = anchor.getAttribute("href")
      return href?.startsWith("https://")
    })

    const externalUrls = externalAnchors
      .map((anchor) => anchor.getAttribute("href"))
      .filter((href): href is string => Boolean(href))

    expect(externalUrls).toContain("https://github.com/carlhoro/raniot-manifesto")
    expect(externalUrls).toContain("https://www.linkedin.com/in/carlos-andres-hoyos-rodriguez")

    externalAnchors.forEach((anchor) => {
      expect(anchor).toHaveAttribute("target", "_blank")
    })
  })
})
