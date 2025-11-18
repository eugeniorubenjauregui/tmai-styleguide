/**
 * Basic Example
 * Simple example showing basic component usage
 */

import * as React from 'react';
import {
  Button,
  Input,
  Card,
  Typography,
  FormField,
  SearchInput,
} from '../src';

export function BasicExample() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <Typography variant="h1">AI Lytics Styleguide - Ejemplo Básico</Typography>

      <section className="space-y-4">
        <Typography variant="h2">Botones</Typography>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="secondary" size="md">
            Secondary
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
          <Button variant="ghost" size="md">
            Ghost
          </Button>
          <Button variant="primary" size="md" loading>
            Loading
          </Button>
          <Button variant="primary" size="md" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Inputs</Typography>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Input por defecto" />
          <Input placeholder="Input con error" state="error" />
          <Input placeholder="Input con éxito" state="success" />
          <Input placeholder="Input deshabilitado" disabled />
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Search Input</Typography>
        <div className="max-w-md">
          <SearchInput
            placeholder="Buscar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Form Field</Typography>
        <div className="max-w-md space-y-4">
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
          />
          <FormField
            label="Contraseña"
            name="password"
            type="password"
            required
            error="La contraseña es requerida"
          />
          <FormField
            label="Nombre"
            name="name"
            type="text"
            helpText="Ingresa tu nombre completo"
          />
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Cards</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="default" shadow>
            <Card.Header>
              <Typography variant="h3">Tarjeta Estándar</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="body">
                Esta es una tarjeta estándar con header, body y footer.
              </Typography>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" size="sm">
                Acción
              </Button>
            </Card.Footer>
          </Card>

          <Card variant="highlighted" shadow>
            <Card.Header>
              <Typography variant="h3" className="text-white">
                Tarjeta Destacada
              </Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="body" className="text-white">
                Esta tarjeta usa el gradiente hero.
              </Typography>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-teal-600">
                Acción
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
}

