from pathlib import Path
out = Path('public/cv')
out.mkdir(parents=True, exist_ok=True)
path = out / 'cv-francais.pdf'
content = """CV - GAHOU Chédide
DÉVELOPPEUSE FULL STACK

Profil
Développeuse Full Stack passionnée par la création d'applications web modernes et performantes.

Compétences
- Next.js, React, TypeScript
- Node.js, Express
- PostgreSQL, MongoDB
- HTML, CSS, JavaScript
- API REST, intégration frontend/backend

Expérience
- Développement de projets web et applications internes
- Conception de plateformes de gestion et de suivi
- Optimisation d'interfaces utilisateur et expérience produit

Contact
Email : exemple@email.com
LinkedIn : linkedin.com/in/gaou-chedide
"""
stream = b''
lines = content.splitlines()
y = 780
for line in lines:
    if line == '':
        stream += b'BT /F1 18 Tf 50 760 Td ( ) Tj ET\n'
    else:
        escaped = line.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        stream += ('BT /F1 18 Tf 50 ' + str(y) + ' Td (' + escaped + ') Tj ET\n').encode('latin-1', 'replace')
    y -= 26
objects = []
objects.append(b'<< /Type /Catalog /Pages 2 0 R >>')
objects.append(b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
objects.append(b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>')
objects.append((b'<< /Length ' + str(len(stream)).encode('ascii') + b' >>\nstream\n' + stream + b'\nendstream'))
objects.append(b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
pdf = bytearray(b'%PDF-1.4\n')
offsets = [0]
for obj in objects:
    offsets.append(len(pdf))
    pdf.extend(f'{len(offsets)-1} 0 obj\n'.encode('ascii'))
    pdf.extend(obj)
    pdf.extend(b'\nendobj\n')
xref_pos = len(pdf)
pdf.extend(f'xref\n0 {len(objects)+1}\n'.encode('ascii'))
pdf.extend(b'0000000000 65535 f \n')
for off in offsets[1:]:
    pdf.extend(f'{off:010d} 00000 n \n'.encode('ascii'))
pdf.extend(f'trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n'.encode('ascii'))
path.write_bytes(pdf)
print(path)
