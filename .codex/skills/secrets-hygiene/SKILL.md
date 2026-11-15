# Secrets Hygiene (Repositorio publico)

## Objetivo

Evitar que cualquier secreto o detalle operativo sensible se suba al remoto.

## Reglas obligatorias

1. Nunca commitear archivos `.env` reales de produccion.
2. Mantener solo plantillas seguras (`.env.example`, `.env.local.example`) sin secretos.
3. Mantener guias de despliegue/operacion en archivos privados ignorados por Git.
4. Nunca publicar certificados, llaves, tokens ni credenciales.

## Checklist antes de push

1. Validar ignore efectivo:
   - `.env`
   - `.env.*`
   - `DEPLOY_PRIVATE.md`
   - `secrets/`, `.secrets/`
   - `*.pem`, `*.key`, `*.p12`, `*.pfx`, `id_rsa`, `id_ed25519`
2. Verificar que `README.md` no incluya pasos productivos sensibles.
3. Confirmar que cualquier guia productiva viva en `DEPLOY_PRIVATE.md` (ignorado).
4. Ejecutar inspeccion local:

```bash
git status --ignored
git check-ignore -v .env DEPLOY_PRIVATE.md
```

## Politica de variables

- Variables de produccion: crear manualmente en VPS.
- Variables en repo: solo placeholders no sensibles.

## Politica Traefik (multi-app)

- Si ya existe Traefik global funcional en el VPS, reutilizarlo con red Docker externa compartida.
- No levantar un segundo Traefik salvo requerimiento de aislamiento fuerte.
