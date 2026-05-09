package com.credexaudit.backend.dto;

import lombok.Data;

@Data
public class AuditRequest {

    private String tool;

    private String plan;

    private double monthlySpend;

    private int seats;

    private int teamSize;

    private String useCase;
}