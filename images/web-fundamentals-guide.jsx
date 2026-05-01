import { useState } from "react";

const terms = [
  {
    id: "www",
    title: "World Wide Web (WWW)",
    category: "core",
    description:
      "The World Wide Web is a system of interlinked hypertext documents and multimedia content accessed via the Internet using web browsers. It was invented by Tim Berners-Lee in 1989 at CERN. The Web is NOT the Internet itself — the Internet is the physical network infrastructure, while the WWW is a service that runs on top of it.",
    role: "Acts as the primary information-sharing layer of the Internet, allowing users to navigate between pages using hyperlinks, access resources from any connected device, and interact with content globally.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <defs>
          <radialGradient id="globe" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0a1628" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="90" r="70" fill="url(#globe)" stroke="#3b82f6" strokeWidth="1.5" />
        <ellipse cx="160" cy="90" rx="30" ry="70" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
        <ellipse cx="160" cy="90" rx="70" ry="25" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="90" y1="90" x2="230" y2="90" stroke="#3b82f6" strokeWidth="1" />
        <line x1="160" y1="20" x2="160" y2="160" stroke="#3b82f6" strokeWidth="1" />
        {[{x:120,y:55},{x:200,y:55},{x:100,y:110},{x:215,y:115},{x:160,y:90}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="#60a5fa" />
        ))}
        {[[0,1],[0,4],[1,4],[2,4],[3,4],[2,3]].map(([a,b],i)=>{
          const pts=[{x:120,y:55},{x:200,y:55},{x:100,y:110},{x:215,y:115},{x:160,y:90}];
          return <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />;
        })}
        <text x="160" y="172" textAnchor="middle" fill="#93c5fd" fontSize="10">Global Hyperlinked Information System</text>
      </svg>
    ),
  },
  {
    id: "tcpip",
    title: "TCP/IP",
    category: "protocol",
    description:
      "Transmission Control Protocol / Internet Protocol is the foundational communication suite of the Internet. IP handles addressing and routing packets to the correct destination. TCP ensures reliable, ordered delivery of those packets, retransmitting any that are lost.",
    role: "Every piece of data sent over the Internet — emails, web pages, videos — travels as IP packets, with TCP ensuring they arrive correctly and in order. Without TCP/IP, networked communication as we know it would not exist.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        {[["Application Layer","HTTP, FTP, DNS","#1d4ed8","#3b82f6"],["Transport Layer","TCP / UDP","#065f46","#10b981"],["Internet Layer","IP Addressing & Routing","#713f12","#f59e0b"],["Network Layer","Ethernet, Wi-Fi","#4c1d95","#a78bfa"]].map(([label,sub,bg,border],i)=>(
          <g key={i}>
            <rect x="30" y={15+i*38} width="260" height="30" rx="4" fill={bg} stroke={border} strokeWidth="1.5" />
            <text x="100" y={34+i*38} fill="white" fontSize="10" fontWeight="bold">{label}</text>
            <text x="100" y={42+i*38} fill="#d1d5db" fontSize="8">{sub}</text>
            <text x="45" y={38+i*38} fill={border} fontSize="18">{["◈","⟳","⊕","⊞"][i]}</text>
          </g>
        ))}
        <text x="160" y="170" textAnchor="middle" fill="#9ca3af" fontSize="9">Data flows DOWN when sending, UP when receiving</text>
        {[3,2,1].map(i=>(
          <text key={i} x="295" y={34+i*38} fill="#6b7280" fontSize="14">↑</text>
        ))}
        {[0,1,2].map(i=>(
          <text key={i} x="295" y={34+i*38} fill="#6b7280" fontSize="14">↓</text>
        ))}
      </svg>
    ),
  },
  {
    id: "browser",
    title: "Web Browsers",
    category: "client",
    description:
      "A web browser is a software application that retrieves, renders, and displays web content. It interprets HTML, CSS, and JavaScript to present pages visually. Examples: Chrome, Firefox, Safari, Edge.",
    role: "Browsers act as the client in the client-server model. They send HTTP requests, receive responses, parse markup, execute scripts, and render the final visual output to the user.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="20" y="10" width="280" height="160" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
        <rect x="20" y="10" width="280" height="28" rx="8" fill="#334155"/>
        <rect x="20" y="30" width="280" height="8" fill="#334155"/>
        <circle cx="38" cy="24" r="6" fill="#ef4444"/><circle cx="56" cy="24" r="6" fill="#f59e0b"/><circle cx="74" cy="24" r="6" fill="#22c55e"/>
        <rect x="90" y="15" width="170" height="18" rx="9" fill="#1e293b" stroke="#64748b" strokeWidth="1"/>
        <text x="175" y="27" textAnchor="middle" fill="#94a3b8" fontSize="8">https://www.example.com</text>
        <rect x="30" y="50" width="260" height="110" rx="4" fill="#f8fafc"/>
        <rect x="30" y="50" width="260" height="20" fill="#e2e8f0"/>
        <text x="160" y="64" textAnchor="middle" fill="#1e293b" fontSize="9" fontWeight="bold">Welcome to Example.com</text>
        <rect x="40" y="78" width="100" height="8" rx="2" fill="#cbd5e1"/>
        <rect x="40" y="92" width="140" height="6" rx="2" fill="#e2e8f0"/>
        <rect x="40" y="104" width="120" height="6" rx="2" fill="#e2e8f0"/>
        <rect x="180" y="75" width="95" height="70" rx="4" fill="#bfdbfe"/>
        <text x="227" y="115" textAnchor="middle" fill="#1d4ed8" fontSize="8">Image</text>
        <text x="160" y="172" textAnchor="middle" fill="#94a3b8" fontSize="9">Browser = HTML Parser + CSS Engine + JS Runtime + Renderer</text>
      </svg>
    ),
  },
  {
    id: "webserver",
    title: "Web Servers",
    category: "server",
    description:
      "A web server is software (and the hardware it runs on) that stores, processes, and delivers web content to clients over HTTP/HTTPS. Common examples: Apache, Nginx, Microsoft IIS.",
    role: "Web servers listen for incoming HTTP requests, locate the requested resource (HTML file, image, API response), and return it as an HTTP response. They are the backbone of every website.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="40" width="80" height="50" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="50" y="62" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">CLIENT</text>
        <text x="50" y="75" textAnchor="middle" fill="#60a5fa" fontSize="7">Browser</text>
        <text x="50" y="85" textAnchor="middle" fill="#60a5fa" fontSize="7">GET /index.html</text>

        <rect x="190" y="20" width="120" height="140" rx="6" fill="#1a2e1a" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="250" y="42" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="bold">WEB SERVER</text>
        <text x="250" y="56" textAnchor="middle" fill="#4ade80" fontSize="7">(Apache / Nginx)</text>
        {["index.html","style.css","app.js","image.png"].map((f,i)=>(
          <g key={i}>
            <rect x="205" y={68+i*22} width="90" height="16" rx="2" fill="#14532d" stroke="#16a34a" strokeWidth="1"/>
            <text x="250" y={80+i*22} textAnchor="middle" fill="#86efac" fontSize="7">{f}</text>
          </g>
        ))}

        <line x1="90" y1="58" x2="190" y2="58" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
        <line x1="190" y1="72" x2="90" y2="72" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow2)"/>
        <text x="140" y="52" textAnchor="middle" fill="#f59e0b" fontSize="7">HTTP Request →</text>
        <text x="140" y="85" textAnchor="middle" fill="#22c55e" fontSize="7">← HTTP Response</text>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/>
          </marker>
          <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    id: "url",
    title: "Uniform Resource Locators (URLs)",
    category: "core",
    description:
      "A URL is a standardized address used to locate resources on the Internet. Every web page, image, video, or API endpoint has a unique URL.",
    role: "URLs provide a human-readable way to identify and access any resource on the Web. They tell the browser which protocol to use, which server to contact, and which specific resource to retrieve.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="30" width="300" height="40" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5"/>
        <text x="20" y="47" fill="#f472b6" fontSize="9" fontWeight="bold">https</text>
        <text x="55" y="47" fill="#94a3b8" fontSize="9">://</text>
        <text x="70" y="47" fill="#60a5fa" fontSize="9" fontWeight="bold">www.example</text>
        <text x="148" y="47" fill="#a78bfa" fontSize="9" fontWeight="bold">.com</text>
        <text x="178" y="47" fill="#34d399" fontSize="9" fontWeight="bold">/products</text>
        <text x="228" y="47" fill="#fbbf24" fontSize="9" fontWeight="bold">?id=42</text>
        <text x="265" y="47" fill="#fb923c" fontSize="9" fontWeight="bold">#top</text>
        <text x="20" y="62" fill="#f472b6" fontSize="8">Protocol</text>
        <text x="70" y="62" fill="#60a5fa" fontSize="8">Subdomain + Domain</text>
        <text x="148" y="62" fill="#a78bfa" fontSize="8">TLD</text>
        <text x="178" y="62" fill="#34d399" fontSize="8">Path</text>
        <text x="228" y="62" fill="#fbbf24" fontSize="8">Query</text>
        <text x="265" y="62" fill="#fb923c" fontSize="8">Fragment</text>

        {[
          ["Protocol","https / http / ftp","#f472b6","Defines HOW to transfer data"],
          ["Domain","www.example.com","#60a5fa","Identifies WHICH server"],
          ["Path","/products","#34d399","Points to specific resource"],
          ["Query","?id=42","#fbbf24","Passes parameters to server"],
          ["Fragment","#top","#fb923c","Jumps to section on page"],
        ].map(([label,ex,color,desc],i)=>(
          <g key={i}>
            <text x="20" y={95+i*17} fill={color} fontSize="8" fontWeight="bold">{label}:</text>
            <text x="70" y={95+i*17} fill="#e2e8f0" fontSize="8">{ex}</text>
            <text x="150" y={95+i*17} fill="#94a3b8" fontSize="7">— {desc}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "dns",
    title: "Domain Name Server (DNS)",
    category: "infrastructure",
    description:
      "DNS is the Internet's 'phone book.' It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 142.250.80.46) so browsers can find the correct server.",
    role: "Without DNS, users would have to remember numeric IP addresses for every website. DNS makes the Web accessible by mapping memorable names to actual server locations automatically.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="70" width="70" height="40" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="45" y="86" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">Browser</text>
        <text x="45" y="98" textAnchor="middle" fill="#60a5fa" fontSize="7">google.com?</text>

        <rect x="125" y="10" width="80" height="35" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1.5"/>
        <text x="165" y="26" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontWeight="bold">Root DNS</text>
        <text x="165" y="38" textAnchor="middle" fill="#a5b4fc" fontSize="7">asks .com server</text>

        <rect x="230" y="10" width="80" height="35" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1.5"/>
        <text x="270" y="26" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontWeight="bold">TLD DNS</text>
        <text x="270" y="38" textAnchor="middle" fill="#a5b4fc" fontSize="7">.com nameserver</text>

        <rect x="125" y="135" width="80" height="35" rx="5" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.5"/>
        <text x="165" y="151" textAnchor="middle" fill="#99f6e4" fontSize="8" fontWeight="bold">Auth. DNS</text>
        <text x="165" y="163" textAnchor="middle" fill="#5eead4" fontSize="7">142.250.80.46</text>

        <rect x="230" y="135" width="80" height="35" rx="5" fill="#1a2e1a" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="270" y="151" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold">Google Server</text>
        <text x="270" y="163" textAnchor="middle" fill="#4ade80" fontSize="7">Sends page ✓</text>

        <line x1="80" y1="82" x2="125" y2="35" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="205" y1="27" x2="230" y2="27" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="270" y1="45" x2="165" y2="135" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="205" y1="152" x2="230" y2="152" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="80" y1="95" x2="270" y2="145" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="5 3"/>
        <text x="160" y="120" fill="#fbbf24" fontSize="7">IP returned to browser</text>
      </svg>
    ),
  },
  {
    id: "http",
    title: "Hypertext Transfer Protocol (HTTP)",
    category: "protocol",
    description:
      "HTTP is the protocol governing how data is requested and transmitted on the Web. HTTPS is its secure version, encrypting data via TLS/SSL. HTTP defines methods like GET (retrieve), POST (send data), PUT (update), and DELETE.",
    role: "HTTP is the language browsers and servers use to communicate. Every time you load a page, your browser sends an HTTP request and the server replies with an HTTP response containing the content.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="20" width="90" height="140" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="55" y="40" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">CLIENT</text>
        {["GET /page HTTP/1.1","Host: example.com","Accept: text/html","User-Agent: Chrome"].map((l,i)=>(
          <text key={i} x="55" y={58+i*14} textAnchor="middle" fill="#64748b" fontSize="6">{l}</text>
        ))}

        <rect x="220" y="20" width="90" height="140" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="265" y="40" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="bold">SERVER</text>
        {["HTTP/1.1 200 OK","Content-Type: text/html","Content-Length: 1234","","<html>...</html>"].map((l,i)=>(
          <text key={i} x="265" y={58+i*14} textAnchor="middle" fill="#64748b" fontSize="6">{l}</text>
        ))}

        <rect x="115" y="60" width="90" height="25" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <text x="160" y="75" textAnchor="middle" fill="#60a5fa" fontSize="8">→ HTTP Request</text>
        <line x1="100" y1="72" x2="115" y2="72" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#a1)"/>
        <line x1="205" y1="72" x2="220" y2="72" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#a2)"/>

        <rect x="115" y="100" width="90" height="25" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="1"/>
        <text x="160" y="115" textAnchor="middle" fill="#86efac" fontSize="8">← HTTP Response</text>
        <line x1="220" y1="112" x2="205" y2="112" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#a3)"/>
        <line x1="115" y1="112" x2="100" y2="112" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#a4)"/>

        {[["200 OK","#22c55e"],["301 Redirect","#f59e0b"],["404 Not Found","#f87171"],["500 Server Error","#ef4444"]].map(([code,color],i)=>(
          <g key={i}>
            <circle cx={120+i*25} cy="158" r="4" fill={color}/>
            <text x={120+i*25} y="172" textAnchor="middle" fill={color} fontSize="5">{code}</text>
          </g>
        ))}
        <defs>
          {["a1","a2","a3","a4"].map((id,i)=>(
            <marker key={id} id={id} markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" fill={i<2?"#3b82f6":"#22c55e"}/>
            </marker>
          ))}
        </defs>
      </svg>
    ),
  },
  {
    id: "intranet",
    title: "Intranet",
    category: "network",
    description:
      "An intranet is a private network accessible only to an organization's members. It uses the same Web technologies (browsers, HTTP, HTML) but is restricted to internal users, typically behind a firewall.",
    role: "Intranets enable organizations to share internal documents, HR portals, communication tools, and databases securely, without exposing information to the public Internet.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="50" y="20" width="220" height="140" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 3"/>
        <text x="160" y="38" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontWeight="bold">ORGANIZATION INTRANET</text>
        {[{x:80,y:70,label:"HR Portal"},{x:160,y:70,label:"Docs"},{x:240,y:70,label:"Email"},{x:80,y:120,label:"Finance"},{x:160,y:120,label:"Projects"},{x:240,y:120,label:"Chat"}].map((n,i)=>(
          <g key={i}>
            <rect x={n.x-25} y={n.y-14} width="50" height="24" rx="4" fill="#312e81" stroke="#818cf8" strokeWidth="1"/>
            <text x={n.x} y={n.y+2} textAnchor="middle" fill="#c7d2fe" fontSize="7">{n.label}</text>
          </g>
        ))}
        <rect x="1" y="75" width="45" height="30" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="23" y="88" textAnchor="middle" fill="#fca5a5" fontSize="7" fontWeight="bold">🔥 Firewall</text>
        <text x="23" y="99" textAnchor="middle" fill="#f87171" fontSize="6">BLOCKS</text>
        <text x="23" y="109" textAnchor="middle" fill="#f87171" fontSize="6">public</text>
        <line x1="46" y1="90" x2="50" y2="90" stroke="#6366f1" strokeWidth="2"/>
        <text x="160" y="172" textAnchor="middle" fill="#818cf8" fontSize="8">Private — internal users only, behind firewall</text>
      </svg>
    ),
  },
  {
    id: "extranet",
    title: "Extranet",
    category: "network",
    description:
      "An extranet is a controlled private network that allows specific external users (partners, suppliers, clients) to access parts of an organization's intranet. It sits between a fully private intranet and the public Internet.",
    role: "Extranets enable secure collaboration with trusted external parties — e.g., a supplier accessing an inventory system, or a client checking order status — without exposing the full intranet.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="100" y="15" width="120" height="60" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2"/>
        <text x="160" y="40" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontWeight="bold">INTRANET</text>
        <text x="160" y="54" textAnchor="middle" fill="#818cf8" fontSize="7">Internal Users Only</text>

        <rect x="60" y="100" width="200" height="50" rx="6" fill="#134e4a" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5 3"/>
        <text x="160" y="122" textAnchor="middle" fill="#99f6e4" fontSize="8" fontWeight="bold">EXTRANET ZONE</text>
        <text x="160" y="136" textAnchor="middle" fill="#5eead4" fontSize="7">Shared with trusted partners/clients</text>

        <rect x="10" y="155" width="60" height="20" rx="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1"/>
        <text x="40" y="168" textAnchor="middle" fill="#94a3b8" fontSize="7">Supplier</text>
        <rect x="130" y="155" width="60" height="20" rx="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1"/>
        <text x="160" y="168" textAnchor="middle" fill="#94a3b8" fontSize="7">Client</text>
        <rect x="250" y="155" width="60" height="20" rx="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1"/>
        <text x="280" y="168" textAnchor="middle" fill="#94a3b8" fontSize="7">Partner</text>

        <line x1="160" y1="75" x2="160" y2="100" stroke="#2dd4bf" strokeWidth="1.5"/>
        <line x1="40" y1="155" x2="80" y2="150" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="160" y1="155" x2="160" y2="150" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="280" y1="155" x2="240" y2="150" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    id: "multitier",
    title: "Multitier Architecture",
    category: "architecture",
    description:
      "Multitier (or n-tier) architecture separates an application into logical layers: Presentation (UI), Logic (application/business), and Data (database). The most common is 3-tier architecture.",
    role: "This separation improves scalability, maintainability, and security. Each tier can be developed, deployed, and scaled independently — e.g., you can upgrade the database without touching the UI.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        {[
          ["PRESENTATION TIER","Browser / Mobile App","User Interface & Display","#1e3a5f","#3b82f6"],
          ["LOGIC TIER","Application Server","Business Rules & Processing","#14532d","#22c55e"],
          ["DATA TIER","Database Server","Storage & Retrieval","#713f12","#f59e0b"],
        ].map(([title,sub,desc,bg,border],i)=>(
          <g key={i}>
            <rect x="30" y={15+i*52} width="260" height="44" rx="6" fill={bg} stroke={border} strokeWidth="1.5"/>
            <text x="160" y={34+i*52} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{title}</text>
            <text x="160" y={47+i*52} textAnchor="middle" fill="#d1d5db" fontSize="7">{sub}</text>
            <text x="160" y={56+i*52} textAnchor="middle" fill="#9ca3af" fontSize="6">{desc}</text>
            {i < 2 && <text x="160" y={60+i*52} fill="#6b7280" fontSize="16" textAnchor="middle">↕</text>}
          </g>
        ))}
        <text x="160" y="178" textAnchor="middle" fill="#9ca3af" fontSize="8">Each tier communicates only with adjacent tiers</text>
      </svg>
    ),
  },
  {
    id: "ftp",
    title: "File Transfer Protocol (FTP)",
    category: "protocol",
    description:
      "FTP is a standard network protocol used to transfer files between a client and server over a TCP/IP network. SFTP (Secure FTP) adds encryption. FTP uses port 21 for commands and port 20 for data transfer.",
    role: "FTP is used by developers to upload website files to a web server, transfer large data files between systems, and manage remote file systems. It predates the Web but remains in use for file management.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="50" width="90" height="80" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="55" y="72" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">FTP CLIENT</text>
        {["index.html","style.css","app.js"].map((f,i)=>(
          <g key={i}><rect x="20" y={80+i*18} width="70" height="13" rx="2" fill="#334155" stroke="#475569" strokeWidth="0.5"/>
          <text x="55" y={91+i*18} textAnchor="middle" fill="#94a3b8" fontSize="7">{f}</text></g>
        ))}

        <rect x="220" y="50" width="90" height="80" rx="6" fill="#1a2e1a" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="265" y="72" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="bold">FTP SERVER</text>
        <text x="265" y="86" textAnchor="middle" fill="#4ade80" fontSize="7">/var/www/html</text>
        {["index.html","style.css","app.js"].map((f,i)=>(
          <g key={i}><rect x="230" y={92+i*16} width="70" height="11" rx="2" fill="#14532d"/>
          <text x="265" y={102+i*16} textAnchor="middle" fill="#86efac" fontSize="6">{f}</text></g>
        ))}

        <rect x="110" y="60" width="100" height="18" rx="3" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1"/>
        <text x="160" y="72" textAnchor="middle" fill="#93c5fd" fontSize="7">UPLOAD (Port 20) →</text>
        <rect x="110" y="90" width="100" height="18" rx="3" fill="#312e81" stroke="#818cf8" strokeWidth="1"/>
        <text x="160" y="102" textAnchor="middle" fill="#c7d2fe" fontSize="7">Control Channel (Port 21)</text>
        <rect x="110" y="118" width="100" height="18" rx="3" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1"/>
        <text x="160" y="130" textAnchor="middle" fill="#93c5fd" fontSize="7">← DOWNLOAD (Port 20)</text>
        <text x="160" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">SFTP adds TLS encryption for secure transfers</text>
      </svg>
    ),
  },
  {
    id: "html",
    title: "Hypertext Markup Language (HTML)",
    category: "language",
    description:
      "HTML is the standard markup language for creating web pages. It uses elements (tags) to structure content — headings, paragraphs, links, images, forms, etc. The current version is HTML5.",
    role: "HTML is the skeleton of every web page. Browsers parse HTML to understand the structure and meaning of content. CSS then styles it and JavaScript makes it interactive.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="10" y="10" width="140" height="160" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5"/>
        <text x="80" y="28" textAnchor="middle" fill="#c7d2fe" fontSize="9" fontWeight="bold">HTML SOURCE</text>
        {[
          {text:"<html>", color:"#f472b6", indent:0},
          {text:"  <head>", color:"#f472b6", indent:0},
          {text:"    <title>Page</title>", color:"#34d399", indent:0},
          {text:"  </head>", color:"#f472b6", indent:0},
          {text:"  <body>", color:"#f472b6", indent:0},
          {text:"    <h1>Hello</h1>", color:"#60a5fa", indent:0},
          {text:"    <p>World</p>", color:"#fbbf24", indent:0},
          {text:"    <a href='#'>Link</a>", color:"#a78bfa", indent:0},
          {text:"  </body>", color:"#f472b6", indent:0},
          {text:"</html>", color:"#f472b6", indent:0},
        ].map((l,i)=>(
          <text key={i} x="18" y={44+i*12} fill={l.color} fontSize="6.5" fontFamily="monospace">{l.text}</text>
        ))}

        <text x="180" y="90" fill="#6b7280" fontSize="18" textAnchor="middle">→</text>

        <rect x="190" y="10" width="120" height="160" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5"/>
        <text x="250" y="28" textAnchor="middle" fill="#1e293b" fontSize="9" fontWeight="bold">RENDERED</text>
        <text x="205" y="50" fill="#1e293b" fontSize="14" fontWeight="bold">Hello</text>
        <text x="205" y="68" fill="#374151" fontSize="7">World</text>
        <text x="205" y="84" fill="#2563eb" fontSize="7" textDecoration="underline">Link</text>
        <line x1="200" y1="36" x2="305" y2="36" stroke="#e2e8f0" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: "web1",
    title: "Web 1.0",
    category: "evolution",
    description:
      "Web 1.0 (~1991–2004) was the 'read-only' web. Pages were static HTML documents. Users could only consume content — no interaction, no user-generated content, no dynamic updates.",
    role: "Web 1.0 established the foundation of the Web — hyperlinks, static pages, and the browser. Sites were like online brochures: informational but one-directional.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <rect x="40" y="20" width="240" height="140" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
        <rect x="40" y="20" width="240" height="25" rx="8" fill="#334155"/>
        <rect x="40" y="37" width="240" height="8" fill="#334155"/>
        <text x="160" y="36" textAnchor="middle" fill="#94a3b8" fontSize="8">📁 www.company.com/about.html</text>
        <rect x="50" y="60" width="220" height="90" fill="#f8fafc" rx="4"/>
        <text x="160" y="80" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">ACME Corp.</text>
        <rect x="60" y="88" width="200" height="6" rx="2" fill="#cbd5e1"/>
        <rect x="60" y="100" width="180" height="5" rx="2" fill="#e2e8f0"/>
        <rect x="60" y="111" width="160" height="5" rx="2" fill="#e2e8f0"/>
        <rect x="60" y="122" width="170" height="5" rx="2" fill="#e2e8f0"/>
        <text x="160" y="145" textAnchor="middle" fill="#64748b" fontSize="7">Static HTML — READ ONLY — No interaction</text>
        <text x="160" y="172" textAnchor="middle" fill="#94a3b8" fontSize="8">~1991–2004 | "The Brochure Web"</text>
      </svg>
    ),
  },
  {
    id: "web2",
    title: "Web 2.0",
    category: "evolution",
    description:
      "Web 2.0 (~2004–present) is the 'read-write' web. It introduced dynamic content, user-generated content, social media, blogs, wikis, and interactive applications powered by AJAX and APIs.",
    role: "Web 2.0 transformed the Web from consumption to participation. Users create content (YouTube, Twitter, Wikipedia). Apps are rich and interactive. Data flows in both directions.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <circle cx="160" cy="90" r="55" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2"/>
        {[
          {x:160,y:35,label:"YouTube",icon:"▶",color:"#ef4444"},
          {x:215,y:62,label:"Twitter",icon:"🐦",color:"#60a5fa"},
          {x:220,y:118,label:"Facebook",icon:"f",color:"#3b82f6"},
          {x:160,y:145,label:"Wikipedia",icon:"W",color:"#94a3b8"},
          {x:100,y:118,label:"Gmail",icon:"M",color:"#f59e0b"},
          {x:102,y:62,label:"Blog",icon:"✏",color:"#34d399"},
        ].map((n,i)=>(
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="18" fill="#1e293b" stroke={n.color} strokeWidth="1.5"/>
            <text x={n.x} y={n.y-2} textAnchor="middle" fill={n.color} fontSize="10">{n.icon}</text>
            <text x={n.x} y={n.y+9} textAnchor="middle" fill="#94a3b8" fontSize="5">{n.label}</text>
            <line x1={n.x} y1={n.y} x2="160" y2="90" stroke={n.color} strokeWidth="0.5" strokeDasharray="2 2"/>
          </g>
        ))}
        <circle cx="160" cy="90" r="14" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2"/>
        <text x="160" y="94" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">USER</text>
        <text x="160" y="170" textAnchor="middle" fill="#9ca3af" fontSize="8">~2004–present | "The Social / Participatory Web"</text>
      </svg>
    ),
  },
  {
    id: "web3",
    title: "Web 3.0",
    category: "evolution",
    description:
      "Web 3.0 is the 'read-write-own' web, built on blockchain and decentralization. It introduces concepts like cryptocurrency, NFTs, DAOs, and smart contracts, aiming to give users ownership of their data and digital assets.",
    role: "Web 3.0 challenges the centralized model of Web 2.0 (where Google/Meta own your data) by distributing control across peer-to-peer networks. Users own identities and data via cryptographic keys.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        {[{x:60,y:40},{x:160,y:20},{x:260,y:40},{x:40,y:120},{x:160,y:155},{x:280,y:120},{x:110,y:90},{x:210,y:90}].map((n,i)=>(
          <g key={i}>
            <polygon points={`${n.x},${n.y-14} ${n.x+12},${n.y} ${n.x+12},${n.y+14} ${n.x},${n.y+26} ${n.x-12},${n.y+14} ${n.x-12},${n.y}`} fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5"/>
            <text x={n.x} y={n.y+9} textAnchor="middle" fill="#c4b5fd" fontSize="6">{["Node","Node","Node","Node","Node","Node","Chain","Chain"][i]}</text>
          </g>
        ))}
        {[[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[3,7],[4,7],[5,7],[0,1],[1,2],[0,3],[2,5],[3,4],[4,5]].map(([a,b],i)=>{
          const pts=[{x:60,y:46},{x:160,y:26},{x:260,y:46},{x:40,y:126},{x:160,y:161},{x:280,y:126},{x:110,y:96},{x:210,y:96}];
          return <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke="#7c3aed" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5"/>;
        })}
        <text x="160" y="172" textAnchor="middle" fill="#9ca3af" fontSize="8">Decentralized | Blockchain | User-owned data</text>
      </svg>
    ),
  },
  {
    id: "web4",
    title: "Web 4.0",
    category: "evolution",
    description:
      "Web 4.0 is the emerging 'symbiotic' or 'intelligent' web. It envisions AI deeply integrated into the Web — anticipatory, proactive systems that understand context, intent, and interact with the physical world (IoT) intelligently.",
    role: "Web 4.0 goes beyond users interacting WITH the Web to the Web acting ON BEHALF of users — AI agents completing tasks, IoT devices communicating autonomously, and ambient computing experiences.",
    diagram: (
      <svg viewBox="0 0 320 180" className="w-full">
        <defs>
          <radialGradient id="aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="160" cy="90" r="75" fill="url(#aura)"/>
        <circle cx="160" cy="90" r="30" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2"/>
        <text x="160" y="85" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold">AI</text>
        <text x="160" y="97" textAnchor="middle" fill="#a78bfa" fontSize="7">AGENT</text>
        {[
          {x:160,y:20,label:"Voice UI",icon:"🎙"},
          {x:240,y:55,label:"IoT Devices",icon:"💡"},
          {x:250,y:130,label:"AR/VR",icon:"🥽"},
          {x:160,y:160,label:"Smart Env",icon:"🏠"},
          {x:70,y:130,label:"Brain-PC",icon:"🧠"},
          {x:60,y:55,label:"Robotics",icon:"🤖"},
        ].map((n,i)=>(
          <g key={i}>
            <line x1="160" y1="90" x2={n.x} y2={n.y} stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 2"/>
            <circle cx={n.x} cy={n.y} r="16" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1"/>
            <text x={n.x} y={n.y-2} textAnchor="middle" fontSize="9">{n.icon}</text>
            <text x={n.x} y={n.y+10} textAnchor="middle" fill="#9ca3af" fontSize="5">{n.label}</text>
          </g>
        ))}
        <text x="160" y="178" textAnchor="middle" fill="#9ca3af" fontSize="7">Emerging | AI-powered | Symbiotic | Ambient Computing</text>
      </svg>
    ),
  },
];

const bonusTopics = [
  {
    id: "webapp-vs-website",
    title: "Web App vs Website",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-950 border border-blue-700 rounded-lg p-3">
          <div className="text-blue-300 font-bold text-sm mb-2">🌐 Website</div>
          <ul className="text-xs text-blue-200 space-y-1">
            <li>• Primarily informational</li>
            <li>• Static or mostly static content</li>
            <li>• Users consume content</li>
            <li>• Limited interactivity</li>
            <li>• e.g. news sites, blogs, portfolios</li>
          </ul>
        </div>
        <div className="bg-purple-950 border border-purple-700 rounded-lg p-3">
          <div className="text-purple-300 font-bold text-sm mb-2">⚡ Web Application</div>
          <ul className="text-xs text-purple-200 space-y-1">
            <li>• Primarily functional/task-focused</li>
            <li>• Dynamic, data-driven content</li>
            <li>• Users interact & manipulate data</li>
            <li>• Rich interactivity & business logic</li>
            <li>• e.g. Gmail, Figma, Google Docs</li>
          </ul>
        </div>
        <div className="col-span-2 bg-slate-800 rounded-lg p-3 text-xs text-slate-300 text-center">
          💡 The line is blurry — modern sites often have both. The key distinction is <span className="text-yellow-400 font-bold">purpose</span>: <span className="text-blue-300">inform</span> (website) vs <span className="text-purple-300">do something</span> (web app).
        </div>
      </div>
    ),
  },
  {
    id: "url-parts",
    title: "Parts of a URL",
    content: (
      <div className="space-y-3">
        <div className="bg-slate-800 rounded-lg p-3 font-mono text-xs text-center leading-relaxed">
          <span className="text-pink-400">https</span>
          <span className="text-slate-400">://</span>
          <span className="text-blue-400">www</span>
          <span className="text-slate-400">.</span>
          <span className="text-cyan-400">example</span>
          <span className="text-purple-400">.com</span>
          <span className="text-green-400">/shop/item</span>
          <span className="text-yellow-400">?id=5&sort=asc</span>
          <span className="text-orange-400">#reviews</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Protocol","https","pink","Secure HTTP — how data is transferred"],
            ["Subdomain","www","blue","Identifies sub-section of domain"],
            ["Domain Name","example","cyan","Unique name identifying the site"],
            ["TLD",".com","purple","Top-Level Domain (.com, .org, .ke)"],
            ["Path","/shop/item","green","Location of resource on server"],
            ["Query String","?id=5&sort=asc","yellow","Key-value pairs passing data to server"],
            ["Fragment","#reviews","orange","Jumps to specific section on page"],
          ].map(([name,ex,color,desc])=>(
            <div key={name} className="bg-slate-800 rounded p-2">
              <div className={`text-${color}-400 font-bold text-xs`}>{name}: <code className={`text-${color}-300`}>{ex}</code></div>
              <div className="text-slate-400 text-xs mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "http-cycle",
    title: "HTTP Request-Response Cycle",
    content: (
      <div className="space-y-2">
        <div className="grid grid-cols-8 gap-1 items-center text-xs">
          {[
            {step:"1",label:"User types URL",color:"blue",icon:"⌨️"},
            {step:"→",label:"",color:"slate",icon:""},
            {step:"2",label:"DNS lookup",color:"purple",icon:"📖"},
            {step:"→",label:"",color:"slate",icon:""},
            {step:"3",label:"TCP connection",color:"teal",icon:"🔗"},
            {step:"→",label:"",color:"slate",icon:""},
            {step:"4",label:"HTTP Request sent",color:"yellow",icon:"📤"},
            {step:"",label:"",color:"slate",icon:""},
          ].map((s,i)=>(
            s.step==="→" ? <div key={i} className="text-slate-500 text-center text-lg">→</div> :
            s.icon ? <div key={i} className={`bg-slate-800 border border-${s.color}-700 rounded p-1 text-center`}>
              <div className="text-base">{s.icon}</div>
              <div className={`text-${s.color}-400 text-xs leading-tight`}>{s.label}</div>
            </div> : <div key={i}/>
          ))}
        </div>
        <div className="bg-green-950 border border-green-700 rounded-lg p-2 text-xs">
          <div className="text-green-400 font-bold mb-1">HTTP Request contains:</div>
          <div className="grid grid-cols-3 gap-1 text-green-200">
            <span>• Method (GET/POST/PUT/DELETE)</span>
            <span>• Request Headers</span>
            <span>• Request Body (for POST)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-slate-700"/>
          <div className="text-slate-400 text-xs">SERVER PROCESSES REQUEST</div>
          <div className="flex-1 h-px bg-slate-700"/>
        </div>
        <div className="bg-blue-950 border border-blue-700 rounded-lg p-2 text-xs">
          <div className="text-blue-400 font-bold mb-1">HTTP Response contains:</div>
          <div className="grid grid-cols-3 gap-1 text-blue-200">
            <span>• Status Code (200, 404, 500…)</span>
            <span>• Response Headers</span>
            <span>• Response Body (HTML, JSON…)</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {[["200","OK","green"],["301","Redirect","yellow"],["404","Not Found","orange"],["500","Server Error","red"]].map(([code,msg,color])=>(
            <div key={code} className={`bg-slate-800 border border-${color}-700 rounded p-1 text-center`}>
              <div className={`text-${color}-400 font-mono text-sm font-bold`}>{code}</div>
              <div className="text-slate-400 text-xs">{msg}</div>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded p-2 text-xs text-slate-300 text-center">
          ↩️ Browser receives response → Parses HTML → Requests linked CSS/JS/images → Renders page
        </div>
      </div>
    ),
  },
];

const categoryColors = {
  core: "text-cyan-400 bg-cyan-900/30 border-cyan-700",
  protocol: "text-yellow-400 bg-yellow-900/30 border-yellow-700",
  client: "text-blue-400 bg-blue-900/30 border-blue-700",
  server: "text-green-400 bg-green-900/30 border-green-700",
  infrastructure: "text-purple-400 bg-purple-900/30 border-purple-700",
  network: "text-pink-400 bg-pink-900/30 border-pink-700",
  architecture: "text-orange-400 bg-orange-900/30 border-orange-700",
  language: "text-red-400 bg-red-900/30 border-red-700",
  evolution: "text-indigo-400 bg-indigo-900/30 border-indigo-700",
};

export default function App() {
  const [selected, setSelected] = useState(terms[0].id);
  const [activeBonus, setActiveBonus] = useState(null);

  const current = terms.find(t => t.id === selected);

  return (
    <div style={{fontFamily:"'Courier New', monospace"}} className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">Unit Assignment</div>
            <h1 className="text-lg font-bold text-white">Computer & Internet Technology — Fundamentals</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Terms covered</div>
            <div className="text-2xl font-bold text-cyan-400">{terms.length}</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 flex gap-4">
        {/* Sidebar */}
        <div className="w-56 flex-shrink-0">
          <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 px-1">Core Terms</div>
          <div className="space-y-1">
            {terms.map(t => (
              <button
                key={t.id}
                onClick={() => { setSelected(t.id); setActiveBonus(null); }}
                className={`w-full text-left px-3 py-2 rounded text-xs transition-all ${
                  selected === t.id && !activeBonus
                    ? "bg-slate-700 text-white border border-slate-500"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 px-1 mt-4">Bonus Questions</div>
          <div className="space-y-1">
            {bonusTopics.map(b => (
              <button
                key={b.id}
                onClick={() => { setActiveBonus(b.id); setSelected(null); }}
                className={`w-full text-left px-3 py-2 rounded text-xs transition-all ${
                  activeBonus === b.id
                    ? "bg-amber-900 text-amber-200 border border-amber-700"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {activeBonus ? (
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-400 text-lg">★</span>
                <h2 className="text-lg font-bold text-white">{bonusTopics.find(b=>b.id===activeBonus)?.title}</h2>
              </div>
              {bonusTopics.find(b=>b.id===activeBonus)?.content}
            </div>
          ) : current ? (
            <div className="space-y-4">
              {/* Title card */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-white">{current.title}</h2>
                  <span className={`text-xs px-2 py-1 rounded border ${categoryColors[current.category]}`}>
                    {current.category}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{current.description}</p>
              </div>

              {/* Diagram */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Diagram</div>
                <div className="max-w-sm mx-auto bg-slate-950 rounded-lg p-2">
                  {current.diagram}
                </div>
              </div>

              {/* Role */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Role in Computer & Internet Technology</div>
                <p className="text-slate-200 text-sm leading-relaxed">{current.role}</p>
              </div>

              {/* Nav */}
              <div className="flex gap-2">
                {terms.findIndex(t=>t.id===selected) > 0 && (
                  <button
                    onClick={()=>setSelected(terms[terms.findIndex(t=>t.id===selected)-1].id)}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 text-sm transition-colors"
                  >
                    ← Prev
                  </button>
                )}
                {terms.findIndex(t=>t.id===selected) < terms.length - 1 && (
                  <button
                    onClick={()=>setSelected(terms[terms.findIndex(t=>t.id===selected)+1].id)}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 text-sm transition-colors"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
