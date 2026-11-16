# Secrets Hygiene (Repositorio publico)

## Objetivo

Evitar que cualquier secreto o detalle operativo sensible se suba al remoto.

## Reglas obligatorias

1. Nunca commitear archivos `.env` reales de produccion.
2. Mantener solo plantillas seguras (`.env.example`, `.env.local.example`) sin secretos.
3. Mantener guias de despliegue/operacion en archivos privados ignorados por Git.
4. Nunca publicar certificados, llaves, tokens ni credenciales.
5. Nunca publicar detalles de arquitectura operativa (topologia, nombres internos, redes, hostnames privados, rutas internas, politicas de infraestructura).

## Checklist antes de push

1. Validar ignore efectivo:
   - `.env`
   - `.env.*`
   - `DEPLOY_PRIVATE.md`
   - `secrets/`, `.secrets/`
   - `*.pem`, `*.key`, `*.p12`, `*.pfx`, `id_rsa`, `id_ed25519`
2. Verificar que `README.md` no incluya pasos productivos sensibles.
3. Confirmar que cualquier guia productiva viva en `DEPLOY_PRIVATE.md` (ignorado).
4. Confirmar que no existan documentos de politica publica con detalles de infraestructura interna.
5. Ejecutar inspeccion local:

```bash
git status --ignored
git check-ignore -v .env DEPLOY_PRIVATE.md
```

## Politica de variables

- Variables de produccion: crear manualmente en VPS.
- Variables en repo: solo placeholders no sensibles.

## Politica de informacion arquitectonica

- Documentar solo decisiones de alto nivel en repositorio publico.
- Mantener en documentos privados ignorados cualquier detalle de infraestructura ejecutable.
- Evitar incluir nombres reales de redes, hosts, dominios internos, stacks o acoplamientos entre aplicaciones.
- Redactar politicas tecnicas en formato generico para que no sean reutilizables como mapa operativo.
