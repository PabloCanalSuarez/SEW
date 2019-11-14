<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="utf-8" indent="yes"/>
    <xsl:template match="/">
        <kml xmlns="http://www.opengis.net/kml/2.2">
            <Document>
                <xsl:for-each select="rutas/ruta">
                    <name>
                        <xsl:value-of select="@nombre"/>
                    </name>
                    <descripcion>
                        <xsl:value-of select="descripcion"/>
                    </descripcion>
                    <Style id="yellowLineGreenPoly">
                        <LineStyle>
                            <color>501400F0</color>
                            <width>4</width>
                        </LineStyle>
                        <PolyStyle>
                            <color>501400F0</color>
                        </PolyStyle>
                    </Style>
                    <Placemark>
                        <styleUrl>#yellowLineGreenPoly</styleUrl>
                        <LineString>
                            <extrude>1</extrude>
                            <tessellate>1</tessellate>
                            <altitudeMode>absoluto</altitudeMode>
                            <coordinates>
                                <xsl:for-each select="coordenadas">
                                    <xsl:value-of select="longitud"/>,<xsl:value-of select="latitud"/>,<xsl:value-of select="altitud"/>
                                    <xsl:text>&#xA;</xsl:text>
                                </xsl:for-each>
                                <xsl:for-each select="hitos/hito/coordenadas">
                                    <xsl:value-of select="longitud"/>,<xsl:value-of select="latitud"/>,<xsl:value-of select="altitud"/>
                                    <xsl:text>&#xA;</xsl:text>
                                </xsl:for-each>
                            </coordinates>
                        </LineString>
                    </Placemark>
                </xsl:for-each>
            </Document>
        </kml>
    </xsl:template>
</xsl:stylesheet>
