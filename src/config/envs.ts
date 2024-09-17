/* eslint-disable prettier/prettier */

import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCT_MS_PORT: number;
  PRODUCT_MS_HOST: string;
}
const envSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCT_MS_PORT: joi.number().required(),
    PRODUCT_MS_HOST: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  product_ms_host: envVars.PRODUCT_MS_HOST,
  product_ms_port: envVars.PRODUCT_MS_PORT,
};
