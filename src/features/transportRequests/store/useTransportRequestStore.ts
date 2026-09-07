import { create } from 'zustand'

import { mockTransportRequests } from '../mockData'
import type {
  TransportRequest,
  TransportRequestStatus,
} from '../types'

interface TransportRequestStore {
  requests: TransportRequest[]

  addRequest: (request: TransportRequest) => void

  updateRequestStatus: (
    id: string,
    status: TransportRequestStatus,
  ) => void
}

export const useTransportRequestStore =
  create<TransportRequestStore>((set) => ({
    requests: mockTransportRequests,

    addRequest: (request) =>
      set((state) => ({
        requests: [request, ...state.requests],
      })),

    updateRequestStatus: (id, status) =>
      set((state) => ({
        requests: state.requests.map((request) =>
          request.id === id
            ? {
                ...request,
                status,
              }
            : request,
        ),
      })),
  }))