package com.credexaudit.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class Audit {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String tool;

    private String plan;

    private double monthlySpend;

    private double monthlySavings;

    private double annualSavings;

    @CreationTimestamp
    private LocalDateTime createdAt;
}