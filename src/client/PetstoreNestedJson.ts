/**
 * Generated by orval v6.11.0-alpha.6 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface PathToSchemaBreedNested {
  name: string;
  size: string;
  ancestry: Ancestry;
}

export type CreatePetsBody = {
  name: string;
  tag: string;
};

export type ListPetsParams = { limit?: string };

export interface Error {
  code: number;
  message: string;
}

export interface Pet {
  id: number;
  name: string;
  tag?: string;
  breed?: BreedNested;
}

export type Pets = Pet[];

/**
 * @summary List all pets
 */
export const listPets = <TData = AxiosResponse<Pets>>(
  params?: ListPetsParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/pets`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * @summary Create a pet
 */
export const createPets = <TData = AxiosResponse<void>>(
  createPetsBody: CreatePetsBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/pets`, createPetsBody, options);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = <TData = AxiosResponse<Pet>>(
  petId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/pets/${petId}`, options);
};

export type ListPetsResult = AxiosResponse<Pets>;
export type CreatePetsResult = AxiosResponse<void>;
export type ShowPetByIdResult = AxiosResponse<Pet>;
