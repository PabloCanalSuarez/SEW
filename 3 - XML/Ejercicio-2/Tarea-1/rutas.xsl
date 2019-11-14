<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
                        <h2>
                            <xsl:value-of select="@nombre"/>
                        </h2>
                        <xsl:apply-templates select="."/>
                        <h3>Referencias</h3>
                        <xsl:apply-templates select="referencias"/>
                        <h3>Hitos</h3>
                        <xsl:apply-templates select="hitos"/>
                    </xsl:for-each>
                </main>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="ruta">
        <ul>
            <li>Tipo: <xsl:value-of select="tipo"/>
            </li>
            <li>Transporte: <xsl:value-of select="transporte"/>
            </li>
            <li>Fecha de inicio: <xsl:value-of select="fechaInicio"/>
            </li>
            <li>Hora: <xsl:value-of select="hora"/>
            </li>
            <li>Duración: <xsl:value-of select="duracion"/>
            </li>
            <li>Agencia: <xsl:value-of select="agencia"/>
            </li>
            <li>Descripción: <xsl:value-of select="descripcion"/>
            </li>
            <li>Público al que se oferta: <xsl:value-of select="publico"/>
            </li>
            <li>Lugar de inicio: <xsl:value-of select="lugarInicio"/>
            </li>
            <li>Calle de inicio: <xsl:value-of select="calleInicio"/>
            </li>
            <li>Nota: <xsl:value-of select="recomendacion"/>
            </li>
            <li>Coordenadas de inicio: <xsl:apply-templates select="coordenadas"/>
            </li>
        </ul>
    </xsl:template>

    <xsl:template match="referencias">
        <ul>
            <xsl:for-each select="referencia">
                <li>
                    <a>
                        <xsl:attribute name="href">
                            <xsl:value-of select="@ruta"/>
                        </xsl:attribute>
                        <xsl:value-of select="@ruta"/>
                    </a>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="hitos">
        <ul>
            <xsl:for-each select="hito">
                <li>Nombre: <xsl:value-of select="@nombre"/>
                </li>
                <li>Descripción: <xsl:value-of select="descripcion"/>
                </li>
                <li>Distancia: <xsl:value-of select="distancia"/>
                </li>
                <li>Coordenadas: <xsl:apply-templates select="coordenadas"/>
                </li>
                <li>Galería de fotos: <xsl:apply-templates select="galeriaFotos"/>
                </li>
                <li>Galería de vídeos: <xsl:apply-templates select="galeriaVideos"/>
                </li>
                <br/>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="coordenadas">
        <ul>
            <li>Longitud: <xsl:value-of select="longitud"/>
            </li>
            <li>Latitud: <xsl:value-of select="latitud"/>
            </li>
            <li>Altitud: <xsl:value-of select="altitud"/>
            </li>
        </ul>
    </xsl:template>

    <xsl:template match="galeriaFotos">
        <ul>
            <xsl:for-each select="foto">
                <li>
                    <img>
                        <xsl:attribute name="src">
                            <xsl:value-of select="@ruta"/>
                        </xsl:attribute>
                    </img>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="galeriaVideos">
            <xsl:for-each select="video">
                <p>
                <iframe width="560" height="315" frameborder="0">
                    <xsl:attribute name="src">
                        <xsl:value-of select="@ruta"/>
                    </xsl:attribute>
                </iframe>
                </p>
            </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>