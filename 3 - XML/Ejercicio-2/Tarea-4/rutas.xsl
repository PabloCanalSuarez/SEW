<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
    <html lang="es">
      <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <link rel="stylesheet" type="text/css" href="layout.css"/>
        <meta name="author" content="Pablo Cañal - UO264903"/>
        <meta name="description" content="Práctica XML 'Rutas' - SEW 2019"/>
        <meta name="keywords" content="rutas, visitas, turismo"/>
        <title>
          Catálogo de Rutas
        </title>
      </head>
      <body>
        <header>
          <h1>Catálogo de Rutas</h1>
        </header>
        <main>
          <xsl:for-each select="rutas/ruta">
            <xsl:apply-templates select="hitos"/>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="hitos">
    <svg xmlns="http://www.w3.org/2000/svg" version="2.0" height="200" width="500">
      <polyline style="fill:white;stroke:red;stroke-width:4"  transform="translate(20,20)">
        <xsl:attribute name="points">
          <xsl:for-each select="hito">
            <xsl:value-of select="distancia"/>,<xsl:value-of select="coordenadas/altitud"/><xsl:text> </xsl:text>
          </xsl:for-each>
          <xsl:for-each select="hito">
            <xsl:if test="position() = 1"><xsl:value-of select="distancia"/>,<xsl:value-of select="coordenadas/altitud"/></xsl:if>
          </xsl:for-each>
        </xsl:attribute>
      </polyline>
      
      <xsl:for-each select="hito">
        <text style="writing-mode: tb; glyph-orientation-vertical: 0;">
          <xsl:attribute name="x">
            <xsl:value-of select="distancia"/>
          </xsl:attribute>
          <xsl:attribute name="y">
            <xsl:value-of select="165"/>
          </xsl:attribute>
          <xsl:value-of select="@nombre"/>
        </text>
      </xsl:for-each>
    </svg>
  </xsl:template>
  
  
</xsl:stylesheet>
